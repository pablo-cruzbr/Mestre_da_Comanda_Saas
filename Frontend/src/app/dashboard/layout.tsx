import { MobileSidebar } from "./components/dashboard/mobile-sidebar";
import { Sidebar } from "./components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      <main className="flex-1 p-4 lg:p-8">
        {children}
      </main> 
    </div>
  );
}