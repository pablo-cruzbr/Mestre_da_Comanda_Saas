import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MobileSidebar } from "./dashboard/components/dashboard/mobile-sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Pizzaria",
  description: "Por Pablo Cruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-app-background">
             {/* Header Mobile */}
             <MobileSidebar/>
             <main className="flex-1 overflow-y-auto bg-app-background">
              <div className="container max-w-full px-0 py-0">
                {children}
              </div>
             </main>
        </div>
      </body> 
    </html>
  );
}