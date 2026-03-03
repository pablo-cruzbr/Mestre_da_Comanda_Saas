"use client"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface DeleteButtonProps{
    productId: string
}

export function DeleteButtonProduct({productId}: DeleteButtonProps) {
    return(
        <Button>
            <Trash className="w-5 h-5"/>
        </Button>
    )
}