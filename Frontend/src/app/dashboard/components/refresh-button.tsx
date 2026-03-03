"use client" 

import { useRouter } from 'next/navigation';
import { RefreshCw } from "lucide-react";
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

export function RefreshButton() {
    const router = useRouter();

    function handleManualRefresh() {
        router.refresh(); 
        toast.success("Lista atualizada!");
    }

    return (
        <Button onClick={handleManualRefresh} variant="ghost" size="icon">
            <RefreshCw size={24} className="text-white " />
        </Button>
    );
}