import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Valid email is required' });
    }

    // specific check for missing API key to allow for better error handling
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not defined');
        return res.status(500).json({ message: 'Server configuration error: Missing API Key' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (!audienceId) {
            console.error('RESEND_AUDIENCE_ID is not defined');
            return res.status(500).json({ message: 'Server configuration error: Missing Audience ID' });
        }

        // Add contact to Resend Audience
        const { data, error } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return res.status(500).json({ message: error.message });
        }

        // Optional: Still notify admin strictly for monitoring (can remove later)
        await resend.emails.send({
            from: 'Portfolio Notification <onboarding@resend.dev>',
            to: 'jasonmatthewconroy@gmail.com',
            subject: 'New Newsletter Subscriber!',
            html: `<p>New subscriber added to audience: <strong>${email}</strong></p>`,
        });

        return res.status(200).json({ message: 'Success', id: data?.id });
    } catch (error: any) {
        console.error('Resend Error:', error);
        return res.status(500).json({ message: error.message || 'Failed to subscribe' });
    }
}
