import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";
import { OrderProvider } from "./provider/order";
import { getCookieServer } from "@/lib/cookieServer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookieServer();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <OrderProvider token={token}>
          {children}
        </OrderProvider>
        
        <Toaster 
          position="bottom-right" 
          richColors 
          closeButton
          theme="dark"
        />
      </body>
    </html>
  );
}