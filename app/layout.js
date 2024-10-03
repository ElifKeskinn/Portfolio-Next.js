import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Elif Keskin | Portfolio',
  description: 'Elif Keskin\'s Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
