"use client";

import { useContext } from "react";
import { EyeIcon, RefreshCw } from "lucide-react";
import { OrderProps } from "@/lib/order.types";
import { Modalorder } from "../components/modal";
import { OrderContext } from "@/provider/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { calculateTotalOrder } from '@/lib/helper';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  orders: OrderProps[];
}

export default function Orders({ orders }: Props) {
  const { isOpen, onRequestOpen } = useContext(OrderContext);
  const router = useRouter();

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados com sucesso !!!");
  }

  return (
    <>
      <main className="container mx-auto p-1">
        <section className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Pedidos em Produção</h1>
          <button 
            onClick={handleRefresh} 
            className="hover:rotate-180 transition-all duration-500 p-2"
          >
            <RefreshCw size={24} color="#FFFF" />
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.length === 0 && (
            <span className="text-gray-400 text-sm sm:text-base mt-1">
              Nenhum pedido aberto no momento...
            </span>
          )}

          {orders.map((order) => (
            <Card
              key={order.id}
              className="bg-[#1d1d2e] border-[#2e2e42] text-white hover:border-brand-primary transition-all duration-300 shadow-lg"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Mesa {order.table}</CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="bg-[#2e2e42] text-gray-400 hover:bg-[#2e2e42] font-normal rounded-full px-3 border-none"
                  >
                    produção
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="space-y-1 min-h-16">
                  {order.items?.slice(0, 3).map((item) => (
                    <p key={item.id} className="text-gray-300 text-sm">
                      • {item.amount}x {item?.product?.name}
                    </p>
                  ))}
                  
                  {(order.items?.length ?? 0) > 3 && (
                    <p className="text-gray-500 text-xs italic">
                      + {(order.items?.length ?? 0) - 3} itens...
                    </p>
                  )}
                </div>

                <div className="border-t border-[#2e2e42] pt-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Total</p>
                      <span className="text-[#f01452] font-bold text-xl">
                        R$ {calculateTotalOrder(order.items ?? [])}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleDetailOrder(order.id)}
                      size="sm"
                      className="bg-[#f01452] hover:bg-[#c01042] text-white gap-2 px-4 h-9 rounded-xl transition-colors"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      {isOpen && <Modalorder />}
    </>
  );
}