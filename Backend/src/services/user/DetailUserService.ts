import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){

        //findFirst pegamos o primeiro iten que achar do schema user, no caso, o id.
        const user = await prismaClient.user.findFirst({
          //Pegamos o id e buscou no banco de dados
            where: {
              id: user_id,
            },
            //Selecionamos o que queremos devolver. 
            select:{
              id: true,
              name:true,
              email:true
            }
          }, 
        
    );
    //Devolvemos no return
          return user;
    }
}

export {DetailUserService}