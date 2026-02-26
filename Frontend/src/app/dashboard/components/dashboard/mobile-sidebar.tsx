"use client"
import { ShoppingCart, Package, Tags, LogOut, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter} from "next/navigation"
import { deleteCookie } from "cookies-next";
import {toast} from 'sonner'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
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

export function MobileSidebar(){
    const router = useRouter();
    const pathname = usePathname()
    const  [open, setOpen] = useState(false)

    async function handleLogout(){
        deleteCookie("session", {path: "/"})
        toast.success("Logout Feito com Sucesso !")
        router.replace("/")
    }


    return(
 <div className='lg:hidden'>
    <header className="sticky top-0 z-50 border-b border-app-border bg-app-card">
        <div className="flex h-16 items-center justify-between px-4">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size={"icon"}>
                        <Menu className="h-6 w-6"/>
                    </Button>
                </SheetTrigger>
                
                <SheetContent side="left" className="bg-app-card border-app-border p-0">
                    <SheetHeader className="p-4 border-b border-app-border">
                        <SheetTitle className="text-white text-left">Menu</SheetTitle>
                    </SheetHeader>
                    
                    <nav className="flex-1 p-4 flex flex-col gap-2">
                        {menuItems.map((menu) => {
                            const Icon = menu.icon;
                            const isActive = pathname === menu.href;

                            return (
                                <Link
                                    key={menu.title}
                                    href={menu.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all group ${
                                        isActive 
                                        ? "bg-brand-primary text-white" 
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
                </SheetContent>
            </Sheet>
        </div>
    </header>
</div>
    )
}