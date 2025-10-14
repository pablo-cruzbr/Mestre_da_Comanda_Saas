// Acessar o Banco
import prismaClient from "../../prisma";

class ListCategoryService {
    async execute(){
        //findMany traz tudo o que queremos
        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })
        return category;
    }
}

export {ListCategoryService}