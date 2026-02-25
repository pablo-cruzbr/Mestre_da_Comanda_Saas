
import { ShoppingCart, Package, Tags, LogOut } from 'lucide-react'
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
    return(
        <div>
            <h1>TESTE MOBILE</h1>
        </div>
    )
}