import { Response, Request } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle (req: Request, res: Response){
        //Chamar o nosso Serviço
        const listCategoryService = new ListCategoryService();
        //Criar uma nova const para executar 
        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export {ListCategoryController}