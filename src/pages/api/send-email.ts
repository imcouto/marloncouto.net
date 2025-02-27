import type { APIRoute } from 'astro';
import axios from 'axios';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

// Optional function to validate email using an external API
const verifyEmail = async (email: string) => {
  try {
    const apiKey = import.meta.env?.ABSTRACT_API_KEY;
    const { data } = await axios.get(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`,
    );
    return data.is_valid_format.value && data.deliverability === 'DELIVERABLE';
  } catch (error) {
    console.error('Error validating email:', error);
    return false;
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const parsedData = contactSchema.safeParse(body);

    if (!parsedData.success) {
      return new Response(
        JSON.stringify({ error: parsedData.error.format() }),
        { status: 400 },
      );
    }

    const { name, email, message } = parsedData.data;

    // Check if the email exists (if you opt for this functionality)
    const isEmailValid = await verifyEmail(email);
    if (!isEmailValid) {
      return new Response(
        JSON.stringify({ error: 'Invalid or non-existent email' }),
        { status: 400 },
      );
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another SMTP service
      auth: {
        user: import.meta.env?.EMAIL_USER,
        pass: import.meta.env?.EMAIL_PASS,
      },
    });

    // Email configuration
    await transporter.sendMail({
      from: email,
      to: import.meta.env?.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: message,
      replyTo: email,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Error processing the request' }),
      { status: 500 },
    );
  }
};
