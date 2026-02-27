"use client"
import { title } from "process"
import { ShoppingCart, Package, Tags, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter} from "next/navigation"
import { deleteCookie } from "cookies-next";
import { Button } from "@/components/ui/button"
import {toast} from 'sonner'

const menuItems = [
    {
        title: "Pedidos",
        href: "/dashboard",
        icon: ShoppingCart
    },
    {
        title: "Produtos",
        href: "/dashboard/produtos",
        icon: Package
    },
    {
        title: "Categorias",
        href: "/dashboard/category",
        icon: Tags
    }
]

export function Sidebar(){

    
        const router = useRouter();
        async function handleLogout(){
            deleteCookie("session", {path: "/"})
            toast.success("Logout Feito com Sucesso !")
            router.replace("/")
        }


    const pathname = usePathname()
    return(
       <aside className="hidden lg:flex flex-col h-screen w-64 border-r border-app-border bg-app-sidebar sticky left-0 top-0">

        <div className="border-b border-app-border p-6">
            <h2 className="text-x1 font-bold text-white">Mestre <span className="text-brand-primary"> das Comandas</span></h2>
            <p className="text-sm text-gray-300 mt-1">Olá Fulano</p>
        </div>

      <nav className="flex-1 flex flex-col gap-2 mt-4">
            {menuItems.map((menu) => {
        const Icon = menu.icon;
        const isActive = pathname === menu.href;

        return (
            <Link
            key={menu.title}
            href={menu.href}
           className={`flex items-center gap-3 p-3 mx-2 rounded-lg transition-all group ${
    isActive 
    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
    : "text-gray-300 hover:bg-brand-primary/10 hover:text-white"
}`}
            >
            <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                isActive ? "text-white" : "text-gray-400"
            }`} />
            <span className="font-medium">{menu.title}</span>
            </Link>
        );
        })}
        </nav>

        <div className="border-t border-app-border p-4">
            <form action={handleLogout}>
                <Button
                    type="submit"
                    variant="ghost"
                    className="w-full justify-start gap-3 text-white hover:text-white hover:bg-brand-primary/10"
                >
                    <LogOut className="w-5 h-5" /> 
                    <span>Sair</span> 
                </Button>
            </form>
        </div>
       </aside>
    );
}