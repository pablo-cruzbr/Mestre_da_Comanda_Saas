// 1 - Inicializar o servidor
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import {router} from './routes';
import fileUpload from 'express-fileupload';

const app = express();  
app.use(express.json());
console.log("TESTE JWT SECRET:", process.env.JWT_SECRET);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 } 
}));
app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.get('/teste', (req: Request, res: Response) => {
  return res.json({ 
    status: "Online", 
    mensagem: "O sistema Mestre da Comanda está pronto para os pedidos! 🍕" 
  });
});

app.use((err: Error, req:Request, res:Response, next: NextFunction) => {
    if(err instanceof Error) {

        return res.status(400).json({
            error: err.message
        })
    }

        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error.'
    })

})
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀`);
});