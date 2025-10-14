//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface ItemRequest{
   order_id: string;
   product_id:string;
   amount: number

}

class AddItemService{
    async execute({order_id, product_id, amount}: ItemRequest) {

        //Acessar nosso schema e criar uma categoria
        const product = prismaClient.item.create({
           data:{
           order_id: order_id,
           product_id: product_id,
           amount
           },
    })
        return product;
    }     
}


export {AddItemService}
