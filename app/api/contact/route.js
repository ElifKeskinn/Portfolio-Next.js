import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// POST methodu için named export
export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Nodemailer yapılandırması
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // E-posta gönderme işlemi
    await transporter.sendMail({
      from: email, // Kullanıcının e-posta adresi
      to: process.env.GMAIL_USER, // Kendi e-posta adresiniz
      subject: `Contact Form: ${subject}`, // Konu
      text: message, // Mesaj içeriği
    });

    // Başarılı yanıt
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Hata yanıtı
    return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
  }
}
