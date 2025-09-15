import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AOSInitializer from "./components/layout/AOSInitializer";
import PageTransition from "./components/gsap/PageTransition";
import ScrollReveal from "./components/gsap/ScrollReveal";
import CustomCursor from "./components/gsap/CustomCursor";

export const metadata = {
  title: "My Next App",
  description: "Learning Next.js with Tailwind",
};

// 🚨 Fake API Key (for testing only — not real)
const FAKE_API_KEY = "sk_test_51H8qKwF4KEzFakeKey1234567890abcdef";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Using API Key:", FAKE_API_KEY); // simulate usage

  return (
    <html lang="en">
      <body className="bg-primary text-accent">
        <AOSInitializer />
        <Navbar />
        <PageTransition />
        <ScrollReveal />
        <CustomCursor />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
