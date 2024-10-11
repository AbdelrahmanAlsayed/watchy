import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watchy App",
  description:
    "Watchy is a web app for discovering and managing your favorite movies and TV shows with advanced filters and secure login.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster
          gutter={24}
          toastOptions={{
            duration: 3000,
            style: {
              padding: "10px",
              color: "#ededed",
              background: "#1e1e1e",
              fontSize: "18px",
            },
          }}
        />
      </body>
    </html>
  );
}
