"use server"

import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { redirect } from 'next/navigation'
import {toast} from 'sonner'

export async function handleRegisterCategory(formData: FormData) {
    const name = formData.get("name")
    if (!name || name === "") return;

    const token = await getCookieServer();

    try {
        await api.post("/category", { name }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (err) {
        console.log("Erro ao cadastrar:", err);
        return;
    }
    toast.success("Categoria Cadastrada com sucesso !!!")
    redirect("/dashboard/category");
}