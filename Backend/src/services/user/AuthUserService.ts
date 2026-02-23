import prismaClient from "../../prisma";
import {compare} from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
      
        //Verificar se o email existe
    const user = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })
        if(!user){  
            throw new Error("usuário ou senha está incorreta")
        }

        // Preciso verificar se a senha que ele mandou está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){  
            throw new Error("usuário ou senha está incorreta")
        }

        //Gerar um token JWT e devolver  os dados do usuário como id, name, email e token - JWT gerado para logar o usuário. 

        const token = sign(
        
        {
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
    )
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}


export {AuthUserService};
