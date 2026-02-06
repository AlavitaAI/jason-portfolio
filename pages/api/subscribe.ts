import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
        // Send email to admin (Jason) about the new subscriber
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Notification <onboarding@resend.dev>', // Use default testing domain until custom domain is set
            to: 'jasonmatthewconroy@gmail.com',
            subject: 'New Newsletter Subscriber!',
            html: `<p>New subscriber: <strong>${email}</strong></p><p>Add them to your audience list!</p>`,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }

        return res.status(200).json({ message: 'Success', id: data?.id });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ message: 'Failed to subscribe' });
    }
}
