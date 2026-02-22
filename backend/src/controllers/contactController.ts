import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const sanitizeHeader = (value: string): string => value.replace(/[\r\n]/g, ' ');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const buildNotificationHtml = (
  name: string,
  email: string,
  phone: string | undefined,
  subject: string,
  message: string,
  timestamp: string,
): string => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background: #06b6d4; padding: 20px 24px;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #555; width: 120px;"><strong>Name:</strong></td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #555;"><strong>Phone:</strong></td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ''}
        <tr><td style="padding: 8px 0; color: #555;"><strong>Subject:</strong></td><td style="padding: 8px 0;">${escapeHtml(subject)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;"><strong>Received:</strong></td><td style="padding: 8px 0;">${timestamp}</td></tr>
      </table>
    </div>
  </div>
</body>
</html>`;

const buildAutoReplyHtml = (name: string, supportEmail: string): string => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background: #06b6d4; padding: 20px 24px;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Thank you for contacting CodexUg!</h1>
    </div>
    <div style="padding: 24px; color: #333;">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for reaching out to us! We have received your message and will get back to you within <strong>24 hours</strong>.</p>
      <p>If you have any urgent queries, feel free to email us directly at <a href="mailto:${escapeHtml(supportEmail)}" style="color: #06b6d4;">${escapeHtml(supportEmail)}</a>.</p>
      <p style="margin-top: 32px;">Warm regards,<br><strong>The CodexUg Team</strong></p>
    </div>
  </div>
</body>
</html>`;

const sendEmails = async (
  name: string,
  email: string,
  phone: string | undefined,
  subject: string,
  message: string,
): Promise<void> => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Contact form submission (email not configured):', { name, email, phone, subject, message });
    return;
  }

  const emailTo = process.env.EMAIL_TO;
  if (!emailTo) {
    console.log('Contact form submission (EMAIL_TO not configured):', { name, email, phone, subject, message });
    return;
  }

  const transporter = createTransporter();
  const timestamp = new Date().toUTCString();
  const safeSubject = sanitizeHeader(subject);
  const safeName = sanitizeHeader(name);

  try {
    await transporter.sendMail({
      from: `"CodexUg Contact Form" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject: `New Contact Form Submission: ${safeSubject}`,
      html: buildNotificationHtml(name, email, phone, subject, message, timestamp),
    });

    await transporter.sendMail({
      from: `"CodexUg" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting CodexUg, ${safeName}!`,
      html: buildAutoReplyHtml(name, emailTo),
    });

    console.log('Contact form emails sent successfully for:', email);
  } catch (emailError) {
    console.error('Failed to send contact form emails:', emailError);
  }
};

export const submitContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, subject, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, message',
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
      return;
    }

    await sendEmails(name, email, phone, subject, message);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    });
  }
};
