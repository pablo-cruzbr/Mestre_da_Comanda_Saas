//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface OrderRequest{
    table: number;
    name: string
}

class CreateOrderService{
    async execute({name, table}: OrderRequest) {


        //Acessar nosso schema e criar uma categoria
        const order = prismaClient.order.create({
           data:{
            name: name,
            table: table
           },
    })
    return order;
        
    }
}

export { CreateOrderService}


