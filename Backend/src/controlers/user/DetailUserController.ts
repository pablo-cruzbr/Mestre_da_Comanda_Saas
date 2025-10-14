import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
  async handle(req: Request, res: Response) {
    //Pegou o id do usuário
    const user_id = req.user_id; 
    
    //console.log("ID DO USER: ", user_id);

    //Chamou o service 
    const detailUserService = new DetailUserService();

    //Passou pro serviço o id do usuário
  const user = await detailUserService.execute(user_id)

  return res.json(user)
    
  }
}

export { DetailUserController };