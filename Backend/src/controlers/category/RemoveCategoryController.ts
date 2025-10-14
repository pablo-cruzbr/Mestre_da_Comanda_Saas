import { Response, Request } from "express";
import { RemoveCategoryService } from "../../services/category/DeleteCategoryService";

class RemoveCategoryController {
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string;
        
        
        const removeCategoryService = new RemoveCategoryService();
        

        const item = await  removeCategoryService.execute({
              item_id
        });

        return res.json(item);
        }
    }


export {RemoveCategoryController}
