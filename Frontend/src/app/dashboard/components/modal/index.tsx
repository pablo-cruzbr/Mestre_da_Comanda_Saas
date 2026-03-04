"use client"

import { X, ClipboardList, CheckCircle2 } from 'lucide-react';
import { useContext } from 'react';
import { OrderContext } from '@/provider/order';
import { calculateTotalOrder } from '@/lib/helper';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Modalorder() {
  const { onRequestClose, order, finishOrder } = useContext(OrderContext);

  async function handleFinishOrder() {
    if (order.length > 0) {
      await finishOrder(order[0].order_id);
    }
  }

  return (
    <section className="fixed inset-0 z-[99] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <Card className="w-full max-w-lg bg-[#1d1d2e] border-[#2e2e42] text-white shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <CardHeader className="relative flex flex-row items-center justify-between border-b border-[#2e2e42] pb-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="text-brand-primary w-6 h-6" />
            <CardTitle className="text-xl font-bold">Detalhes do Pedido</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onRequestClose}
            className="hover:bg-red-500/20 text-red-500 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </Button>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <div className="bg-[#2e2e42]/30 p-4 rounded-xl border border-[#2e2e42]">
            {order.length > 0 ? (
              <div className="flex flex-col gap-1">
                <span className="text-lg">
                  Mesa: <b className="text-brand-primary">{order[0].order.table}</b>
                </span>
                {order[0].order?.name && (
                  <span className="text-sm text-gray-400">
                    Cliente: <b>{order[0].order.name}</b>
                  </span>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-center italic">Esta order não contém pedidos!</p>
            )}
          </div>

          <ScrollArea className="max-h-[350px] pr-4">
            <div className="space-y-4">
              {order.map((item) => (
                <div key={item.id} className="group flex flex-col gap-1 p-2 rounded-lg hover:bg-[#2e2e42]/20 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium">
                      <b className="text-brand-primary mr-2">{item.amount}x</b> 
                      {item.product.name}
                    </span>
                    <span className="text-sm font-bold text-gray-300">
                      R$ {(parseFloat(item.product.price) * item.amount).toFixed(2)}
                    </span>
                  </div>
                  {item.product.description && (
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      {item.product.description}
                    </p>
                  )}
                  <Separator className="mt-2 bg-[#2e2e42]" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 border-t border-[#2e2e42] pt-6">
          <div className="flex justify-between items-center w-full">
            <span className="text-gray-400 font-medium">Valor Total</span>
            <span className="text-2xl font-black text-[#f01452]">
              R$ {calculateTotalOrder(order)}
            </span>
          </div>

          <Button 
            onClick={handleFinishOrder}
            className="w-full bg-[#f01452] hover:bg-[#c01042] text-white font-bold h-12 rounded-xl flex items-center gap-2 transition-all active:scale-95"
          >
            <CheckCircle2 className="w-5 h-5" />
            Concluir Pedido
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}