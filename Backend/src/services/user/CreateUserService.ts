// (FUNCIONARIO DA LOJA) Criando as Funções que o Funcionario vai fazer.]

//Cadastrando PrismaCLient (Conectando ao banco de dados)
import prismaClient from "../../prisma";
const bcrypt = require('bcryptjs');

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest) {

        //Verificações:
        //1- Verificar se já existe um e-mail no banco
        if(!email){
            throw new Error("Email Incorreto !")
        }

        //2- Verificar se esse email já está cadastrado na Plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Esse email já existe !")
        }

        //3- Criar e enviar dados pro Banco
        
        const passwordHash = await bcrypt.hash(password, 8);
        const user = prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
        //Vamos Devolver
            select:{
                id: true,
                name:true,
                email:true,
                
            }

        })
        return user;
    }
}

export {CreateUserService}

