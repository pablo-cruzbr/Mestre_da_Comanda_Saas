import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileSidebar } from "./components/dashboard/mobile-sidebar";
import { Sidebar } from "./components/dashboard/sidebar";
import { Toaster } from "sonner";
import { OrderProvider } from "@/provider/order";
import { getCookieServer } from "@/lib/cookieServer";
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