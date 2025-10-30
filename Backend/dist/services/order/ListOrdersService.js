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
exports.ListOrdersService = void 0;
//Para modermos manipular o banco
const prisma_1 = __importDefault(require("../../prisma"));
class ListOrdersService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({}) {
            //FindMany acessa todos os itens, porém eu quero com uma condição:
            const orders = yield prisma_1.default.order.findMany({
                where: {
                    draft: false,
                    status: false,
                },
                orderBy: {
                    created_at: 'desc'
                }
            });
            return orders;
        });
    }
}
exports.ListOrdersService = ListOrdersService;
