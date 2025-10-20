import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NovaTek Consulting - Technology Solutions & Digital Transformation",
  description: "Leading technology consulting firm delivering innovative solutions, digital transformation, and expert project management services to businesses worldwide.",
  keywords: "technology consulting, digital transformation, project management, IT solutions, business consulting",
  authors: [{ name: "NovaTek Consulting" }],
  openGraph: {
    title: "NovaTek Consulting - Technology Solutions & Digital Transformation",
    description: "Leading technology consulting firm delivering innovative solutions, digital transformation, and expert project management services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
