import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { handleRegisterCategory } from './actions' 
import { Tags } from 'lucide-react'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CategoryProps {
    id: string;
    name: string;
}

async function getCategories(): Promise<CategoryProps[]> {
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

export default async function Category() {
    const categories = await getCategories();

    return (
        <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Categorias</h1>
        <p className="text-2x1 sm:text-base mt-1">Organize suas Categorias</p>
        <div>

            <Button>Teste</Button>

        </div>
{/* 
            <form action={handleRegisterCategory} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome da categoria"
                    required
                    className="p-3 rounded bg-[#1d1d2e] text-white border border-gray-800 focus:border-red-500 outline-none"
                />    
            </form> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {categories.map((category) => (
                    <Card key={category.id} className="bg-app-card border-app-border transition-shadow hover:shadow-md text-white">
                        <CardHeader className="font-medium">
                            <CardTitle className="gap-2 flex items-center text-base md:text-lg">
                                <Tags className="w-5 h-5"/>
                                {category.name}</CardTitle>
                            </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}





