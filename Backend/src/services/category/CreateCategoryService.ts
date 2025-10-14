//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}

class CreateCategoryService{
    async execute(name) {

        if(name === ''){
            throw new Error('Name Invalid');
            
        }

        //Acessar nosso schema e criar uma categoria
        const category = prismaClient.category.create({
           data:{
            name: name,
           },
        select:{
            id:true,
            name:true,
        }
    })
    return category;
        
    }
}

export {CreateCategoryService}