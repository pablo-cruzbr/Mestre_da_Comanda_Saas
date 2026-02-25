"use client"
import { ShoppingCart, Package, Tags, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter} from "next/navigation"
import { deleteCookie } from "cookies-next";
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

export function MobileSidebar(){
     const router = useRouter();
            async function handleLogout(){
                deleteCookie("session", {path: "/"})
                toast.success("Logout Feito com Sucesso !")
                router.replace("/")
            }

    return(
        <div>
            <h1>TESTE MOBILE</h1>
        </div>
    )
}