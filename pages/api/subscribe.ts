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
        // Send email to admin (Jason) about the new subscriber
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Notification <onboarding@resend.dev>', // Use default testing domain until custom domain is set
            to: 'jasonmatthewconroy@gmail.com',
            subject: 'New Newsletter Subscriber!',
            html: `<p>New subscriber: <strong>${email}</strong></p><p>Add them to your audience list!</p>`,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return res.status(500).json({ message: error.message });
        }

        return res.status(200).json({ message: 'Success', id: data?.id });
    } catch (error: any) {
        console.error('Resend Error:', error);
        return res.status(500).json({ message: error.message || 'Failed to subscribe' });
    }
}
