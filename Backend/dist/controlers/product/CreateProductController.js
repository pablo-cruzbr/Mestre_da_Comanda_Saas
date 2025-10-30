"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/products/CreateProductService");
const cloudinary_1 = require("cloudinary");
// Configuração do Cloudinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, description, category_id } = req.body;
                const createProductService = new CreateProductService_1.CreateProductService();
                // Verificar se há arquivos no request
                if (!req.files || Object.keys(req.files).length === 0) {
                    console.error("Nenhum arquivo enviado.");
                    return res.status(400).json({ error: "Nenhum arquivo enviado." });
                }
                const file = req.files['file'];
                // Verificar se o arquivo tem conteúdo
                if (!file.data) {
                    console.error("Erro: file.data está vazio!");
                    return res.status(400).json({ error: "Arquivo inválido" });
                }
                const resultFile = yield new Promise((resolve, reject) => {
                    cloudinary_1.v2.uploader.upload_stream({ folder: "products" }, // Definir uma pasta no Cloudinary para organizar os arquivos
                    (error, result) => {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }).end(file.data);
                });
                console.log("URL da imagem:", resultFile.secure_url);
                // Criar o produto após o upload da imagem
                const product = yield createProductService.execute({
                    name,
                    price,
                    description,
                    banner: resultFile.url,
                    category_id
                });
                return res.json(product);
            }
            catch (error) {
                console.error("❌ Erro ao processar a requisição:", error);
                return res.status(500).json({ error: "Erro interno do servidor" });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
