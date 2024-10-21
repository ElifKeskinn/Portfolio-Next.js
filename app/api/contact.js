import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Nodemailer config
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail kullanıyorsanız
      auth: {
        user: process.env.GMAIL_USER, // .env dosyasından alınan Gmail adresiniz
        pass: process.env.GMAIL_PASS, // .env dosyasından alınan Gmail şifreniz (Uygulama şifresi olabilir)
      },
    });

    try {
      await transporter.sendMail({
        from: email, // Gönderenin e-posta adresi
        to: process.env.GMAIL_USER, // Kendi e-posta adresiniz
        subject: `Contact Form: ${subject}`,
        text: message,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
