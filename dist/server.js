"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
async function Server() {
    const server = (0, fastify_1.default)();
    server.listen({ port: 5432 }, (erro, address) => {
        if (erro) {
            server.log.error(erro);
        }
        else {
            console.log("servidor rodando" + address);
        }
    });
}
Server();
