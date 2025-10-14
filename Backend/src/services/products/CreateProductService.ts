//Para modermos manipular o banco
import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    banner: string;
    category_id: string;
    price: string;
    description: string;

}

class CreateProductService{
    async execute({name, banner, category_id, price, description}: ProductRequest) {
        //Se o usuário não enviar um nome, vai dar um erro.
        if(name === ''){
            throw new Error('Name Invalid');
            
        }

        //Acessar nosso schema e criar uma categoria
        const product = prismaClient.product.create({
           data:{
            name: name,
            banner: banner,
            category_id: category_id,
            price: price,
            description: description
           },
    })
    return product;
        
    }
}

export {CreateProductService}