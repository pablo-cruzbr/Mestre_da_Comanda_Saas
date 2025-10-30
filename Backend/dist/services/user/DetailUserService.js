"use strict";
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
exports.DetailUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DetailUserService {
    execute(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            //findFirst pegamos o primeiro iten que achar do schema user, no caso, o id.
            const user = yield prisma_1.default.user.findFirst({
                //Pegamos o id e buscou no banco de dados
                where: {
                    id: user_id,
                },
                //Selecionamos o que queremos devolver. 
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });
            //Devolvemos no return
            return user;
        });
    }
}
exports.DetailUserService = DetailUserService;
