//(CHEFE DA LOJA) Controler  Vai Receber nossa requisição: pegar os parâmetros da requuisição e vai chamar o serviço, repassando os Dados Necessarios.

import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";


class CreateUserController {
  async handle(req: Request, res: Response) {
    // Recebe os dados do corpo da requisição (cliente)
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    // Chama o método execute e passa os parâmetros necessários
    const user = await createUserService.execute({
        name, 
        email, 
        password});

    // Retorna o usuário criado como resposta em JSON
    return res.json(user);
  }
}

export { CreateUserController };