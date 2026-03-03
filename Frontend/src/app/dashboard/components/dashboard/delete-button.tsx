"use client"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { handleDeleteProduct } from "../../category/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
    productId: string
}

export function DeleteButtonProduct({ productId }: DeleteButtonProps) {
      const router = useRouter();
    async function handleClientDelete() {
        const confirmed = window.confirm("Tem certeza que deseja excluir este produto?");
        
        if (confirmed) {
            try {
                await handleDeleteProduct(productId);
                toast.success("Produto excluído com sucesso!");
                router.refresh();
            } catch (err) {
                toast.error("Erro ao excluir produto.");
            }
        }
    }

    return (
        <Button 
            variant="destructive" 
            size="icon" 
            onClick={handleClientDelete}
        >
            <Trash className="w-5 h-5"/>
        </Button>
    )
}