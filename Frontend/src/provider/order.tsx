'use client'

import { ReactNode, createContext, useState } from "react" 
import { api } from "@/services/api"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// --- Tipagens ---

export interface OrderItemProps {
    id: string;
    amount: number;
    created_at: string;
    order_id: string;
    product_id: string;
    name: string;
    product: {
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    };
    order: {
        id: string;
        table: number;
        name: string | null;
        draft: boolean;
        status: boolean;  
    }
}

type OrderContextData = {
    isOpen: boolean; 
    onRequestOpen: (order_id: string) => Promise<void>;
    onRequestClose: () => void;
    order: OrderItemProps[];
    finishOrder: (order_id: string) => Promise<void>;
}

type OrderProviderProps = {
    children: ReactNode;
    token: string | null; // Injetado pelo RootLayout (Server Side)
}

// --- Contexto ---

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children, token }: OrderProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState<OrderItemProps[]>([]);
    const router = useRouter();

    /**
     * Abre o modal e busca os itens do pedido
     */
    async function onRequestOpen(order_id: string) {
        // Se o token não existir, nem tentamos a chamada
        if (!token) {
            toast.error("Sessão inválida. Por favor, faça login novamente.");
            return;
        }

        try {
            const response = await api.get("/order/detail", {
                headers: { 
                    Authorization: `Bearer ${token}` 
                },
                params: { 
                    order_id: order_id 
                }
            });

            setOrder(response.data);
            setIsOpen(true);

        } catch (err: any) {
            console.error("Erro ao buscar detalhes:", err.response?.data || err.message);
            toast.error("Não foi possível carregar os detalhes do pedido.");
        }
    }

    /**
     * Fecha o modal
     */
    function onRequestClose() {
        setIsOpen(false);
    }

    /**
     * Finaliza o pedido (Fecha a mesa)
     */
    async function finishOrder(order_id: string) {
        if (!token) return;

        try {
            await api.put("/finish/order", { order_id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Pedido finalizado com sucesso!");
            
            // Fecha o modal e atualiza os dados da página (Dashboard)
            setIsOpen(false);
            router.refresh();

        } catch (err: any) {
            console.error("Erro ao finalizar:", err.response?.data || err.message);
            toast.error("Erro ao finalizar o pedido.");
        }
    }

    return (
        <OrderContext.Provider 
            value={{
                isOpen,
                onRequestOpen,
                onRequestClose,
                finishOrder,
                order
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}