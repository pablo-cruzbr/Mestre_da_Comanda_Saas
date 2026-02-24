import { title } from "process"
import { ShoppingCart, Package, Tags } from 'lucide-react'
import Link from 'next/link'
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

      <nav className="flex-1 p-4 flex flex-col gap-2">
  {menuItems.map((menu) => (
    <Link 
      key={menu.href} 
      href={menu.href}
      className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-brand-primary hover:text-white transition-all group"
    >
      <menu.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="font-medium">{menu.title}</span>
    </Link>
  ))}
</nav>

       </aside>
    )
}