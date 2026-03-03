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

export async function handleDeleteProduct(productId: string) {
    if(!productId){
        return{sucess: false, error:"Falha ap deletar produto"}
    }

      const token = await getCookieServer();

      if(!token){
        return{sucess: false, error:"Falha a buscar o token"}
    }

    try {
    await api.delete(`/product/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            product_id: productId 
        }
    });

    return { success: true }; 

} catch (err) {
    console.log("Erro ao deletar:", err);
    return { success: false, error: "Falha ao deletar produto" };
}
}