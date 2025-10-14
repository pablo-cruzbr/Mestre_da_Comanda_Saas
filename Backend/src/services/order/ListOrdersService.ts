//Para modermos manipular o banco
import prismaClient from "../../prisma";

class ListOrdersService{
    async execute({}) {


        //FindMany acessa todos os itens, porém eu quero com uma condição:
        const orders = await prismaClient.order.findMany({
           where:{
            draft: false,
            status:false,
           },
           orderBy:{
            created_at: 'desc'
           }
    })
    return orders;
        
    }
}

export {ListOrdersService}

