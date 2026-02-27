import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { Button } from '../components/button/index'
import { handleRegisterCategory } from './actions' // Importando a ação que criamos

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

            <form action={handleRegisterCategory} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome da categoria"
                    required
                    className="p-3 rounded bg-[#1d1d2e] text-white border border-gray-800 focus:border-red-500 outline-none"
                />
                
            </form>

            <section className="grid grid-cols-1 gap-4 mt-8">
                {categories.map((category) => (
                    <article key={category.id} className="p-4 bg-[#1d1d2e] rounded border border-gray-800 text-white">
                        <span className="font-medium">{category.name}</span>
                    </article>
                ))}
            </section>
        </div>
    )
}