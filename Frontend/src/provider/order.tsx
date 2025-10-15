'use client'

//Context API

import { ReactNode, createContext, useState } from "react" 
import { api } from "@/services/api"
import { getCookieClient } from "@/lib/cookieClient"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

//Criar Tipagem para buscar informações do banco
export interface OrderItemProps{
    id: string;
    amount: number;
    created_at: string;
    order_id: string;
    product_id: string;
    name: string;
    product:{
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    };
    order:{
      id: string;
      table: number;
      name: string | null;
      draft: boolean;
      status: boolean;  
    }
}

//Criar nossa tipagem 1: vai receber as seguintes propridades: isOpen, onRequestOpen, onRequestClose
type OrderContextData = {
    isOpen: Boolean;
    onRequestOpen: (order_id: string) => Promise<void>;
    onRequestClose: () => void;
    order: OrderItemProps[];
    finishOrder: (order_id: string) => Promise<void>;
}

//Criar nossa tipagem 2: que vai receber a renderização no nosso layout
type OrderProviderProps = {
    children: ReactNode;
}

//Criar nosso Contexto
export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({children}: OrderProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState<OrderItemProps[]>([]);
    const router = useRouter();

    async function onRequestOpen(order_id: string) {
        setIsOpen(true);
        console.log('Id da Order:', order_id)

        const token = getCookieClient();
        console.log('Token de Usuário:', token)
        const response = await api.get("/order/detail", {
            headers:{
                Authorization: `Bearer ${token}`
            },
                params:{
                    order_id: order_id
                }
            })
            setOrder(response.data)
            console.log(response.data)
        }
    
        function onRequestClose() {
        setIsOpen(false)
        }

        //FINALIZAR A ORDER - FECHAR
        async function finishOrder(order_id: string){
            const token = getCookieClient();

            const data = {
                order_id: order_id,
            }

            try{
                await api.put("/finish/order", data, {
                    headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                }catch(err){
                    console.log(err);
                    return;
                }
                toast.success("Pedido Finalizado com Sucesso")
                router.refresh();
                setIsOpen(false)
        }

    return(
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