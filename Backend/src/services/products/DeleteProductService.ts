import prismaClient from "../../prisma";

interface DeleteRequest {
    product_id: string;
}

class DeleteProductService {
    async execute({ product_id }: DeleteRequest) {
        if (!product_id) {
            throw new Error("ID do produto inválido.");
        }

        const product = await prismaClient.product.delete({
            where: {
                id: product_id
            }
        });

        return product;
    }
}

export { DeleteProductService };