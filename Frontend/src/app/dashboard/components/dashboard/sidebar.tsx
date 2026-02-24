import { title } from "process"
import { ShoppingCart, Package, Tags } from 'lucide-react'

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
    return(
       <aside className="hidden lg:flex h-screen w-64 border-app-border bg-app-sidebar">

        <div className="border-b border-app-border p-6">
            <h2 className="text-x1 font-bold text-white">Mestre <span className="text-brand-primary"> das Comandas</span></h2>
            <p className="text-sm text-gray-300 mt-1">Olá Fulano</p>
        </div>

       </aside>
    )
}