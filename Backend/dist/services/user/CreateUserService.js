"use strict";
// (FUNCIONARIO DA LOJA) Criando as Funções que o Funcionario vai fazer.]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
//Cadastrando PrismaCLient (Conectando ao banco de dados)
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt = require('bcryptjs');
class CreateUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
            //Verificações:
            //1- Verificar se já existe um e-mail no banco
            if (!email) {
                throw new Error("Email Incorreto !");
            }
            //2- Verificar se esse email já está cadastrado na Plataforma
            const userAlreadyExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (userAlreadyExists) {
                throw new Error("Esse email já existe !");
            }
            //3- Criar e enviar dados pro Banco
            const passwordHash = yield bcrypt.hash(password, 8);
            const user = prisma_1.default.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash,
                },
                //Vamos Devolver
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
