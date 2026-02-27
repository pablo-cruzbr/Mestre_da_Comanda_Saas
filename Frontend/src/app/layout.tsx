import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MobileSidebar } from "./dashboard/components/dashboard/mobile-sidebar";
import { Sidebar } from "./dashboard/components/dashboard/sidebar"; // IMPORTAR AQUI!

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "Software Pizzaria", description: "Por Pablo Cruz" };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col lg:flex-row min-h-screen bg-app-background">
          <div className="flex-1 flex flex-col">           
             <MobileSidebar />
             <main className="flex-1 bg-app-background p-4 lg:p-8">
                {children}
             </main>
          </div>
        </div>
      </body>
    </html>
  );
}