import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { Tags } from 'lucide-react'
import { Card, CardTitle, CardHeader } from '@/components/ui/card';
import { CategoryForm } from '../components/dashboard/category-form';
import { RefreshButton } from '../components/refresh-button';

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
        console.log(err);
        return [];
    }
}

export default async function Category() {
    const categories = await getCategories();

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">      
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Categorias</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <p className="text-gray-400 text-sm sm:text-base">Organize suas Categorias</p>
                        <RefreshButton /> 
                    </div>
                </div>

                <CategoryForm/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <Card key={category.id} className="bg-[#1d1d2e] border-gray-800 text-white">
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