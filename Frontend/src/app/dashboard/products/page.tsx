import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { Tags } from 'lucide-react'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoryForm } from '../components/dashboard/category-form';
import { ProductForm } from '../components/dashboard/products-form';
import { ProductProps } from '@/lib/product.types';

interface CategoryProps {
    id: string;
    name: string;

    token: string | null;
}

async function getProducts(): Promise<ProductProps[]> {
    try {
        const token = await getCookieServer();
        const response = await api.get("/category", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data || [];
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function getCategories() {
    try {
        const token = await getCookieServer();
        const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data || [];
    } catch (err) {
        return [];
    }
}

export default async function Products() {
    const categories = await getProducts();
    const token = await getCookieServer();

    return (
       <div className="space-y-4 sm:space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">      
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Produtos</h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">Visualize seus Produtos</p>
        </div>

        <ProductForm categories={categories} token={token}/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
            <Card key={category.id} className="bg-app-card border-app-border transition-shadow hover:shadow-md text-white">
                <CardHeader className="font-medium">
                    <CardTitle className="gap-2 flex items-center text-base md:text-lg">
                        <Tags className="w-5 h-5"/>
                    
                        {category.name}
                    </CardTitle>
                </CardHeader>
            </Card>
        ))}
    </div>
</div>
    )
}





