import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import {router} from './routes';
import fileUpload from 'express-fileupload';

const app = express();  
app.use(express.json());

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://mestre-da-comanda-saas-2qod.vercel.app',
      'https://mestre-da-comanda-saas.vercel.app' 
    ];
    
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
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
app.listen(process.env.PORT, () => {
  console.log('Servidor Online !!! na porta 3333');
});
