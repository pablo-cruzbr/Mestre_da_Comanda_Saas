"use client";

import { useContext } from "react";
import { RefreshCw } from "lucide-react";
import { OrderProps } from "@/lib/order.types";
import { Modalorder } from "../components/modal";
import { OrderContext } from "@/provider/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { calculateTotalOrder } from '@/lib/helper';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <main className="container mx-auto p-4">
        <section className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Pedidos em Produção</h1>

          <button onClick={handleRefresh} className="hover:opacity-70 transition-all">
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
              className="bg-app-card border-app-border text-white cursor-pointer hover:border-brand-primary transition-colors"
              onClick={() => handleDetailOrder(order.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg lg:text-xl font-bold">Mesa {order.table}</CardTitle>
                  <Badge variant="secondary" className="text-xs select-none">produção</Badge>
                </div>
              </CardHeader>

              {order.items && order.items.length > 0 && (
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <strong className="block mb-1">Produtos:</strong>
                    {order.items.slice(0, 3).map((item) => (
                      <p key={item.id} className="text-gray-300">
                        • (x{item.amount}) {item.product.name} 
                      </p>
                    ))}

                    {order.items.length > 3 && (
                      <p className="text-gray-500 italic mt-1">
                        ...e mais {order.items.length - 3} itens
                      </p>
                    )}

                    <div className="mt-4 pt-2 border-t border-gray-700">
                      <h3 className="font-bold text-brand-primary">
                        Total: R$ {calculateTotalOrder(order.items)}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </section>
      </main>

      {isOpen && <Modalorder />}
    </>
  );
}