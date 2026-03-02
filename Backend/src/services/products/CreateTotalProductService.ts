import prismaClient from "../../prisma";

class ListProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                banner: true,
                price: true,
                description: true,
                category_id: true,
                
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc' 
            }
        });

        return products;
    }
}

export { ListProductsService };