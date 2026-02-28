"use client";

import { useContext } from "react";
import styles from "../orders/styles.module.scss";
import { RefreshCw } from "lucide-react";
import { OrderProps } from "@/lib/order.types";
import { Modalorder } from "../components/modal";
import { OrderContext } from "@/provider/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { calculateTotalOrder } from '@/lib/helper';

interface Props {
  orders: OrderProps[];
}

export default function Orders({ orders }: Props) {
   const {order} = useContext(OrderContext);
  const router = useRouter();

  const { isOpen, onRequestOpen } = useContext(OrderContext);

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados com sucesso !!!");
  }

  return (
    <>
      <main >

        <section className={styles.containerHeader}>
          <h1  className="text-2xl sm:text-3xl font-bold text-white">Últimos pedidos</h1>

          <button>
            <RefreshCw
              size={24}
              color="#3fffa3"
              onClick={handleRefresh}
            />
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders.length === 0 && (
            <span className="text-gray-400 text-sm sm:text-base mt-1">
              Nenhum pedido aberto no momento...
            </span>
          )}

          {orders.map((order) => (
            <button
              key={order.id}
              className={styles.orderItem}
              onClick={() => handleDetailOrder(order.id)}
            >
              <div className={styles.etiquetas}></div>

              
              <span className={styles.orderTitle}>
                Mesa: {order.table}
              </span>

                <div className={styles.divider}></div>
             
              <div className={styles.orderDetails}>
                {order.name && <p>Cliente: {order.name}</p>}
                <p>Status: {order.status ? "Em andamento" : "Rascunho"}</p>
              </div>
             
              {order.items && order.items.length > 0 && (
                <div className={styles.productsPreview}>
                  <strong>Produtos Pedidos:</strong>

                  {order.items.slice(0, 5).map((item) => (
                    <p key={item.id}>
                      • {item.product.name} (x{item.amount}) 
                    </p>
                  ))}

                  {order.items.length > 10 && (
                    <p style={{ opacity: 0.7 }}>
                      ...e mais {order.items.length - 2} itens
                    </p>
                  )}
                  
                  <h3 className={styles.total}>
                  Valor Total: R$ {calculateTotalOrder(order.items)}
                </h3>
                                  
                </div>
              )}
            </button>
          ))}

        </section>
      </main>

      {isOpen && <Modalorder />}
    </>
  );
}
