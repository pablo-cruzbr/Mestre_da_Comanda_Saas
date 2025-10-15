import { OrderItemProps } from "@/provider/order";
export function calculateTotalOrder(orders: OrderItemProps[]){
    //Percorremos nossa array orders usando o reduce e temos acesso a cada item do nosso objeto e temos um total que começa em 0 e somamos o total do item, soma com o preço vezes a quantidade e vai pro próximo.
    
    return orders.reduce((total, item) =>{
        const itemTotal = parseFloat(item.product.price) * item.amount;
        return total + itemTotal
    }, 0)

}