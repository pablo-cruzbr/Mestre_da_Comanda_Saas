"use client"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function DeleteButtonProduct() {
    return(
        <Button>
            <Trash className="w-5 h-5"/>
        </Button>
    )
}