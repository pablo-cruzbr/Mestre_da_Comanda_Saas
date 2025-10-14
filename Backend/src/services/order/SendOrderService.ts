//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface OrderRequest{
    order_id:string;

}

class SendOrderService{
    async execute({order_id}: OrderRequest) {

        const order = prismaClient.order.update({
            where:{
            id: order_id
            },
           data:{
            draft: false
           },
    })
    return order;
    }     
}


export {SendOrderService}

