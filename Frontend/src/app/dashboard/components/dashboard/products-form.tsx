"use client"

import { ChangeEvent, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Se tiver o componente de textarea
import { toast } from "sonner";
import Image from "next/image";
import { getCookieClient } from "@/lib/cookieClient";
import { api } from "@/services/api";

interface CategoryProps {
    id: string;
    name: string;
}

interface Props {
    categories: CategoryProps[]
}

export function ProductForm({ categories }: Props) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState("");

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            if (file.type !== "image/jpeg" && file.type !== "image/png") {
                toast.warning("Formato de arquivo não permitido!");
                return;
            }

            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    }

    async function handleClientAction(formData: FormData) {
        const categoryIndex = formData.get("category");
        const name = formData.get("name");
        const price = formData.get("price");
        const description = formData.get("description");

        if (!name || !categoryIndex || !price || !description || !image) {
            toast.warning('Preencha todos os campos corretamente!')
            return;
        }

        const data = new FormData();
        data.append("name", name as string);
        data.append("price", price as string);
        data.append("description", description as string);
        data.append("category_id", categories[Number(categoryIndex)].id);
        data.append("file", image);

        const token = getCookieClient();

        try {
            await api.post("/product", data, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success("Produto cadastrado com sucesso!");
    
            setPreviewImage("");
            setImage(null);
            setOpen(false);
            
        } catch (error) {
            toast.error("Erro ao cadastrar o produto.");
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-brand-primary text-white border-none">
                    <Plus className="h-5 w-5 mr-2" />
                    Novo Produto
                </Button>
            </DialogTrigger>

            <DialogContent className="bg-[#1d1d2e] border-gray-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Criar um novo produto</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Preencha as informações para adicionar ao cardápio.
                    </DialogDescription>
                </DialogHeader>

                <form action={handleClientAction} className="space-y-4 mt-2">
                    <Label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-[#12121c] hover:border-red-500 relative overflow-hidden group">
                        {previewImage ? (
                            <Image
                                alt="Preview"
                                src={previewImage}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-red-500" />
                                <p className="text-sm text-gray-400 mt-2">Clique para enviar foto</p>
                            </div>
                        )}
                        <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleFile} />
                    </Label>

                   <div className="space-y-1">
                        <Label>Categoria</Label>
                        <select 
                            name="category" 
                            className="w-full h-10 px-3 rounded bg-[#12121c] border border-gray-700 text-white outline-none focus:border-red-500"
                        >
                            {/* Percorre a lista e cria uma <option> para cada categoria */}
                            {categories?.map((category, index) => (
                                <option key={category.id} value={index}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" name="name" required placeholder="Nome do produto" className="bg-[#12121c] border-gray-700" />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="price">Preço</Label>
                        <Input id="price" name="price" required placeholder="Preço (ex: 45.00)" className="bg-[#12121c] border-gray-700" />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" name="description" required placeholder="Descreva o produto..." className="bg-[#12121c] border-gray-700 min-h-20" />
                    </div>

                    <Button type="submit" className="w-full bg-brand-primary mt-2">
                        Cadastrar Produto
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}