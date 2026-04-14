import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
