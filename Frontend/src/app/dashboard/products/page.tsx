import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { Package, Tags } from 'lucide-react'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { ProductForm } from '../components/dashboard/products-form';
import { ProductProps } from '@/lib/product.types';
import { DeleteButtonProduct } from '../components/dashboard/delete-button';

interface CategoryProps {
    id: string;
    name: string;
}

async function getCategories(): Promise<CategoryProps[]> {
    try {
        const token = await getCookieServer();
        const response = await api.get("/category", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data || [];
    } catch (err) {
        return [];
    }
}

async function getProducts(): Promise<ProductProps[]> {
    try {
        const token = await getCookieServer();
        const response = await api.get("/products", { 
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data || [];
    } catch (err: any) { 
        console.error("ERRO CRÍTICO PRODUTOS:", err.response?.data || err.message);
        return [];
    }
}

export default async function Products() {
    const [categories, products, token] = await Promise.all([
        getCategories(),
        getProducts(),
        getCookieServer()
    ]);

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">      
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Produtos</h1>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">Gerencie o cardápio da sua pizzaria</p>
                </div>

                <ProductForm categories={categories} token={token}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length === 0 && (
                    <p className="text-gray-500 italic">Nenhum produto cadastrado...</p>
                )}

                {products.map((product) => (
                    <Card key={product.id} className="bg-app-card border-app-border overflow-hidden text-white flex flex-col">
                        <div className="relative h-44 w-full bg-black/20">
                            <img 
                                src={product.banner} 
                                alt={product.name}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <CardHeader className="p-4 flex-1">
                            <div className="flex justify-between items-start gap-4 w-full">
                                <div className="flex items-center gap-2 flex-1">
                                    <CardTitle className="text-lg font-bold line-clamp-1">
                                        {product.name}
                                    </CardTitle>
                                    
                                   
                                </div>
                                
                                <span className=" whitespace-nowrap">
                                     <DeleteButtonProduct productId={product.id} />
                                </span>
                            </div>
                        </CardHeader>
                         

                        <CardContent className="p-4 pt-0 space-y-3">
                            <p className="text-sm text-gray-400 line-clamp-2 h-10">
                                {product.description}
                            </p>
                            
                            <div className="flex items-center justify-between pt-2 border-t border-app-border">
                                <span className="text-xl font-bold text-brand-primary">
                                   R$ {product.price}
                                </span>
                                <Package className="w-4 h-4 text-gray-600" />
                            </div>

                            <span className="bg-brand-primary/10 text-brand-primary text-[10px] uppercase font-bold px-2 py-1 rounded border border-brand-primary/20 whitespace-nowrap">
                                    {product.category.name}
                                    
                                </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}