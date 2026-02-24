import { Header } from './components/Header/index' 
import { Toaster } from 'sonner'
import { OrderProvider } from '@/provider/order'
import { Sidebar } from './components/dashboard/sidebar'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen bg-white">   
            <Sidebar />   
           <main className="flex-1 overflow-y-auto">
                <OrderProvider>
                    <div className="p-8"> 
                        {children}
                    </div>
                </OrderProvider>
            </main>

            <Toaster 
                position="bottom-right"
                toastOptions={{
                    style:{
                        backgroundColor:"#f1f1f1",
                        color: "#131313",
                        borderColor:"rgba(255,255,255,0.5)"
                    }
                }}
            />
        </div>
    )
}