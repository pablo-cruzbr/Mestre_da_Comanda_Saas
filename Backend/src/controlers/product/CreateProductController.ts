import { Response, Request } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Configuração do Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

class CreateProductController {
    async handle(req: Request, res: Response) {
        try {
            const { name, price, description, category_id } = req.body;
            const createProductService = new CreateProductService();

            // Verificar se há arquivos no request
            if (!req.files || Object.keys(req.files).length === 0) {
                console.error("Nenhum arquivo enviado.");
                return res.status(400).json({ error: "Nenhum arquivo enviado." });
            }

            const file: UploadedFile = req.files['file'] as UploadedFile;

            // Verificar se o arquivo tem conteúdo
            if (!file.data) {
                console.error("Erro: file.data está vazio!");
                return res.status(400).json({ error: "Arquivo inválido" });
            }

            const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "products" }, // Definir uma pasta no Cloudinary para organizar os arquivos
                    (error, result) => {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }
                ).end(file.data);
            });

            console.log("URL da imagem:", (resultFile as any).secure_url);

            // Criar o produto após o upload da imagem
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: resultFile.url,
                category_id
            });

            return res.json(product);
        } catch (error) {
            console.error("❌ Erro ao processar a requisição:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

export { CreateProductController };
