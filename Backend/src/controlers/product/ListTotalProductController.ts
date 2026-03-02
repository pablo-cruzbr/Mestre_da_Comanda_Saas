import { Request, Response } from "express";
import { ListTotalProductsService } from "../../services/products/ListTotalProductService";
class ListProductsController {
    async handle(req: Request, res: Response) {
        const listProductsService = new ListTotalProductsService();

        try {
            const products = await listProductsService.execute();

            return res.json(products);
            
        } catch (error) {
            console.error("❌ Erro ao listar produtos:", error);
            return res.status(500).json({ error: "Erro interno ao buscar produtos." });
        }
    }
}

export { ListProductsController };