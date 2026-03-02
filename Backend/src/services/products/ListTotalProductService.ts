import prismaClient from "../../prisma";

class ListTotalProductsService {
    async execute() {
        // Buscamos todos os produtos no banco
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                banner: true,
                price: true,
                description: true,
                category_id: true,
                // Incluímos os dados da categoria para mostrar o nome no Dashboard
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc' // Os últimos cadastrados aparecem primeiro
            }
        });

        return products;
    }
}

export { ListTotalProductsService };