
//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface FinishRequest{
  order_id:string

}

class FinishOrderService{
    async execute({order_id}: FinishRequest) {

        //Acessar nosso schema e criar uma categoria
        const order = prismaClient.order.update({
           where:{
           id: order_id
           },data:{
            status:true
           }
    })
    return order;
        
    }
}

export {FinishOrderService}

