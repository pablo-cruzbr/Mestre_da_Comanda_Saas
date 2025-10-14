//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface ItemRequest{
   item_id: string;

}

class RemoveCategoryService{
    async execute({item_id}: ItemRequest) {

     //Acessar nosso schema, modal e Deletar um item
        const item = prismaClient.category.delete({
           where:{
            id: item_id,
           }
    })
    
    return item;

    }
}

export {RemoveCategoryService}
