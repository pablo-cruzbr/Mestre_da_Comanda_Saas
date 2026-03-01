"use server"

import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { revalidatePath } from 'next/cache' 

export async function handleRegisterCategory(formData: FormData) {
    const name = formData.get("name")
    if (!name) return;

    const token = await getCookieServer();

    try {
        await api.post("/category", { name }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (err) {
        console.log("Erro ao cadastrar:", err);
        throw new Error("Falha ao cadastrar"); 
    }

    revalidatePath("/dashboard/category"); 
}
