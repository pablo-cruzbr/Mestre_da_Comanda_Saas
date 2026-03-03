import { Request, Response } from 'express';
import { DeleteProductService } from '../../services/products/DeleteProductService';

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.params.id as string;

        const deleteProductService = new DeleteProductService();

        try {
            const product = await deleteProductService.execute({
                product_id
            });

            return res.json(product);
        } catch (err) {
            return res.status(400).json({ error: "Erro ao deletar produto." });
        }
    }
}

export { DeleteProductController };