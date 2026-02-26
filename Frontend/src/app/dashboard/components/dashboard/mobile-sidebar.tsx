"use client"
import { ShoppingCart, Package, Tags, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter} from "next/navigation"
import { deleteCookie } from "cookies-next";
import {toast} from 'sonner'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
    const  [open, setOpen] = useState(false)

    async function handleLogout(){
        deleteCookie("session", {path: "/"})
        toast.success("Logout Feito com Sucesso !")
        router.replace("/")
    }

       
    return(
        <div className='lg:hidden'>
            <h1>TESTE MOBILE</h1>
        </div>
    )
}