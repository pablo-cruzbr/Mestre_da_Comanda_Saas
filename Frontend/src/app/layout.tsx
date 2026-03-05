import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MobileSidebar } from "./dashboard/components/dashboard/mobile-sidebar";
import { OrderProvider } from "@/provider/order";
import { getCookieServer } from "@/lib/cookieServer";
import { Sidebar } from "./dashboard/components/dashboard/sidebar";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "Software Pizzaria", description: "Por Pablo Cruz" };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookieServer();

  return (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-app-background`}>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>
        <Sidebar /> 
        <main className="flex-1 p-4 lg:p-8">
            <OrderProvider token={token}>
              {children}
            </OrderProvider>
          </main>

      </div>
    </body>
  </html>
);
}