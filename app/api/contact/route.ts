import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Oxilah Website <onboarding@resend.dev>', // Placeholder sender
      to: 'hello@oxilah.com', // Placeholder recipient
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2E7FFF; margin-bottom: 24px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 120px; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #00D4FF;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Project Type:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${projectType || 'Not specified'}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 24px;">
            <h3 style="color: #555; margin-bottom: 12px; font-size: 16px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #333; line-height: 1.5;">${message}</div>
          </div>
          
          <div style="margin-top: 32px; font-size: 12px; color: #999; text-align: center;">
            This email was sent from the Oxilah website contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
