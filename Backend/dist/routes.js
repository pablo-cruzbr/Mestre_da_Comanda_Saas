"use strict";
// (PORTA DA LOJA) Rotas da nossa aplicação.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const CreateUserController_1 = require("./controlers/user/CreateUserController");
const AuthUserController_1 = require("./controlers/user/AuthUserController");
const DetailUserController_1 = require("./controlers/user/DetailUserController");
const CreateCategoryController_1 = require("./controlers/category/CreateCategoryController");
const isAuthenticated_1 = require("./Middlewares/isAuthenticated");
const ListCategoryController_1 = require("./controlers/category/ListCategoryController");
const CreateProductController_1 = require("./controlers/product/CreateProductController");
const ListByCategoryController_1 = require("./controlers/product/ListByCategoryController");
const RemoveCategoryController_1 = require("./controlers/category/RemoveCategoryController");
const CreateOrderController_1 = require("./controlers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controlers/order/RemoveOrderController");
const AddItemController_1 = require("./controlers/order/AddItemController");
const RemoveItemController_1 = require("./controlers/order/RemoveItemController");
const SendOrderController_1 = require("./controlers/order/SendOrderController");
const ListOrdersController_1 = require("./controlers/order/ListOrdersController");
const DetailOrderController_1 = require("./controlers/order/DetailOrderController");
const FinishOrderController_1 = require("./controlers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
//Rota para mapear a pasta para armazenar as imagens
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// 1 -- ROTAS DE LOGIN USER  --
//Criar/Cadastrar um usuário
router.post('/users', new CreateUserController_1.CreateUserController().handle);
//Logar o Usuário
router.post('/session', new AuthUserController_1.AuthUserController().handle);
//Validação de Token (Verificação) e exibir os Detalhes do Usuário
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// 2 -- CATEGORIAS --
//Criar/Cadastrar: Categorias
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
//Ler, Listar as informações: Categorias
router.get('/category', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//Deletar Categorias
router.get('/delete/category', isAuthenticated_1.isAuthenticated, new RemoveCategoryController_1.RemoveCategoryController().handle);
// 3 -- PRODUTOS --
//MULTER Envio de imagens
//router.post('/product', upload.single('file'), new CreateProductController().handle)
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
// 4 -- ORDERS --
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order/delete', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
// 4 -- ADICIONAR ITENS AO PEDIDO (ORDERS) --
router.post('/order/add', isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
// 5 -- DELETAR ITENS DOS PEDIDOS (ORDERS) --
router.delete('/item/remove', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
// 6 -- ATUALIZAR STATUS DOS PEDIDOS (ORDERS) --
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
// 7 -- LISTAR ORDERS ABERTAS--
router.get('/order/list', isAuthenticated_1.isAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
// 7 -- LISTAR TODAS AS ORDERS FECHADAS (ORDERS)--
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
// 8 -- PEGAR TODOS OS DETALHES DO NOSSO PEDIDO SPRIND OPERATION (INCLUDE)--
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
// 9 -- FINALIZAR ORDERS--
router.put('/finish/order', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
