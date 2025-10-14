// (PORTA DA LOJA) Rotas da nossa aplicação.

import {Router} from "express";
import multer from 'multer';
import uploadConfig from './config/multer'

import { CreateUserController} from './controlers/user/CreateUserController'
import {AuthUserController} from './controlers/user/AuthUserController'
import { DetailUserController } from "./controlers/user/DetailUserController";
import { CreateCategoryController } from "./controlers/category/CreateCategoryController";
import { isAuthenticated } from "./Middlewares/isAuthenticated";
import { ListCategoryController } from "./controlers/category/ListCategoryController";
import { CreateProductController } from "./controlers/product/CreateProductController";
import { ListByCategoryController } from "./controlers/product/ListByCategoryController";
import { RemoveCategoryController } from "./controlers/category/RemoveCategoryController";
import { CreateOrderController } from "./controlers/order/CreateOrderController";
import { RemoveOrderController } from "./controlers/order/RemoveOrderController";
import { AddItemController } from "./controlers/order/AddItemController";
import { RemoveItemController } from "./controlers/order/RemoveItemController";
import { SendOrderController } from "./controlers/order/SendOrderController";
import { ListOrdersController } from "./controlers/order/ListOrdersController";
import { DetailOrderController } from "./controlers/order/DetailOrderController";
import { FinishOrderController } from "./controlers/order/FinishOrderController";

const router = Router();

//Rota para mapear a pasta para armazenar as imagens
const upload = multer(uploadConfig.upload("./tmp"));

// 1 -- ROTAS DE LOGIN USER  --

//Criar/Cadastrar um usuário
router.post('/users', new CreateUserController().handle)

//Logar o Usuário
router.post('/session', new AuthUserController().handle)

//Validação de Token (Verificação) e exibir os Detalhes do Usuário
router.get('/me', isAuthenticated, new DetailUserController().handle)

// 2 -- CATEGORIAS --

//Criar/Cadastrar: Categorias
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

//Ler, Listar as informações: Categorias
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//Deletar Categorias
router.get('/delete/category', isAuthenticated,  new RemoveCategoryController().handle)
// 3 -- PRODUTOS --
//MULTER Envio de imagens
//router.post('/product', upload.single('file'), new CreateProductController().handle)

router.post('/product', isAuthenticated, new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// 4 -- ORDERS --
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order/delete', isAuthenticated, new RemoveOrderController().handle)
 
// 4 -- ADICIONAR ITENS AO PEDIDO (ORDERS) --

router.post('/order/add', isAuthenticated, new AddItemController().handle)

// 5 -- DELETAR ITENS DOS PEDIDOS (ORDERS) --

router.delete('/item/remove', isAuthenticated, new RemoveItemController().handle)

// 6 -- ATUALIZAR STATUS DOS PEDIDOS (ORDERS) --
router.put('/order/send', isAuthenticated, new SendOrderController().handle)

// 7 -- LISTAR ORDERS ABERTAS--
router.get('/order/list', isAuthenticated, new ListOrdersController().handle)

// 7 -- LISTAR TODAS AS ORDERS FECHADAS (ORDERS)--
router.get('/orders', isAuthenticated, new ListOrdersController().handle)

// 8 -- PEGAR TODOS OS DETALHES DO NOSSO PEDIDO SPRIND OPERATION (INCLUDE)--
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

// 9 -- FINALIZAR ORDERS--
router.put('/finish/order', isAuthenticated, new FinishOrderController().handle)

export { router };