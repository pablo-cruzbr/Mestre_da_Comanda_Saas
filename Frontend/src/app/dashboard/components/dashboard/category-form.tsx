"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export function CategoryForm() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* O Trigger fica FORA do Content */}
            <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white border-none">
                    <Plus className="h-5 w-5 mr-2"/>
                    Nova Categoria
                </Button>
            </DialogTrigger>

            <DialogContent className="bg-[#1d1d2e] border-gray-800 text-white">
                <DialogHeader>
                    <DialogTitle>Criar nova categoria</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Preencha o nome para adicionar ao seu cardápio.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome da Categoria</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Ex: Pizzas"
                            className="bg-[#12121c] border-gray-700 text-white focus:border-red-500"
                        />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-primary">
                        Cadastrar
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}