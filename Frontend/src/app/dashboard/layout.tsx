//Escopo para criar layout dentro da pagina dashboard
import { Header } from './components/Header/index' 
import {Toaster} from 'sonner'
import { OrderProvider } from '@/provider/order'

export default function DashboardLayout({children}:
    {children: React.ReactNode}
){
    return(
        <>
         <Header/>
        <OrderProvider>
        {children}
        </OrderProvider>
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
        </>
    )
}