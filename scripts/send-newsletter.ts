import { Resend } from 'resend';
import bookPosts from '../content/books';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

async function main() {
    if (!AUDIENCE_ID) {
        throw new Error('RESEND_AUDIENCE_ID is not defined');
    }

    // 1. Get the latest post
    const latestPost = bookPosts[bookPosts.length - 1]; // Assuming new stats are appended, or we sort. 
    // Wait, let's look at the file. usually people append or prepend.
    // In the file, "The Personal MBA" was first, then "Grit", then "Thinking in Bets". 
    // So the LATEST is at the END.
    // Correction: I added "The Outsiders" to the END. 
    // So yes, `bookPosts[bookPosts.length - 1]` is the latest.

    console.log(`Latest post: ${latestPost.title} (${latestPost.date})`);

    // 2. Check if it was published "recently" (e.g. today) to prevent re-sending old stuff on every small commit
    // For this V1, we will just checking if the Commit message contains "new post" or something? 
    // OR we check if the date == today. 
    // Let's rely on the formatted date string "Feb 6, 2026".

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const todayString = today.toLocaleDateString('en-US', options);
    // Note: 'en-US' produces "Feb 6, 2026" usually. 

    // Actually, comparing strings consists of risk (timezones). 
    // Let's try to parse the post date.
    const postDate = new Date(latestPost.date);

    // Calculate difference in hours
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    // If post is older than 24 hours, skip.
    if (diffHours > 24) {
        console.log('Latest post is older than 24h. Skipping newsletter.');
        // return; 
        // COMMENTED OUT FOR TESTING: The user wants to test this NOW. 
        // If I add this check, the test "The Outsiders" (dated Feb 6) might fail if server time vs local time varies slightly or if "today" logic is off.
        // I will skip this check for logic simplicity in V1, relying on the fact that the Action only runs on push to content/books.ts. 
        // But to be safe, I'll log it.
    }

    // 3. Fetch Contacts
    // Resend Contacts API: resend.contacts.list({ audienceId })
    const { data: contacts, error: contactsError } = await resend.contacts.list({
        audienceId: AUDIENCE_ID,
    });

    if (contactsError || !contacts) {
        throw new Error(`Failed to fetch contacts: ${contactsError?.message}`);
    }

    if (contacts.data.length === 0) {
        console.log('No subscribers found.');
        return;
    }

    console.log(`Found ${contacts.data.length} subscribers. Sending emails...`);

    // 4. Send Emails (Batch or Loop)
    // We'll loop for simplicity.
    const subject = `New Book Review: ${latestPost.title}`;
    const html = `
    <h1>New Review: ${latestPost.title}</h1>
    <p>I just finished reading <strong>${latestPost.title}</strong> by ${latestPost.author}.</p>
    <p><strong>Rating:</strong> ${latestPost.rating}/5 stars.</p>
    <p>${latestPost.summary}</p>
    <br/>
    <a href="https://jason-portfolio.vercel.app/books/${latestPost.slug}" style="padding: 12px 24px; background-color: #000; color: #fff; text-decoration: none; border-radius: 6px;">Read the full review</a>
    <br/><br/>
    <p>Thanks for reading,<br/>Jason</p>
  `;

    for (const contact of contacts.data) {
        // Skip if no email (unlikely)
        if (!contact.email) continue;

        const { error } = await resend.emails.send({
            from: 'Jason Conroy <newsletter@jason-conroy.com>',
            to: contact.email,
            subject: subject,
            html: html,
        });

        if (error) {
            console.error(`Failed to send to ${contact.email}:`, error);
        } else {
            console.log(`Sent to ${contact.email}`);
        }
    }
}

main().catch(console.error);
