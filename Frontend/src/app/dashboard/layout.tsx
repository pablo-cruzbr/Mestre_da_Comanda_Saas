import { Toaster } from 'sonner'
import { OrderProvider } from '@/provider/order'
import { Sidebar } from './components/dashboard/sidebar'
import { MobileSidebar } from './components/dashboard/mobile-sidebar'

// Remova o html e body daqui, eles pertencem ao RootLayout (src/app/layout.tsx)
export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <OrderProvider>
            <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#11111d]">
                {/* Sidebar Desktop - Agora ela aparece lado a lado */}
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    {/* Header Mobile */}
                    <MobileSidebar />
                    
                    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                        <div className="w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
            <Toaster />
        </OrderProvider>
    )
}