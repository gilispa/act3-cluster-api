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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const empresa_1 = require("../models/empresa");
const rubro_1 = require("../models/rubro");
const rubroSeed_1 = require("../seeds/rubroSeed");
const connection = new sequelize_typescript_1.Sequelize({
    database: "cluster_db",
    dialect: "postgres",
    username: "cluster_user",
    password: "cluster123",
    host: "localhost",
    models: [empresa_1.Empresa, rubro_1.Rubro]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate();
            console.log("Conexión exitosa a PostgreSQL");
            yield connection.sync();
            yield (0, rubroSeed_1.seedRubros)();
        }
        catch (error) {
            console.log("Error conectando a DB", error);
        }
    });
}
exports.default = connectionDB;
