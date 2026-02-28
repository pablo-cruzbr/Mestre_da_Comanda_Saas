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

export function CategoryForm() {
    const [open, setOpen] = useState(false);
    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>
                    <Plus className="h-5 w-5 mr-2"/>
                    Nova Categoria
                </Button>
            </DialogTrigger>
            <DialogContent>
              
            </DialogContent>
        </Dialog>
    )
}