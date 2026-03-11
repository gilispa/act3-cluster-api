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
exports.seedRubros = seedRubros;
const rubro_1 = require("../models/rubro");
function seedRubros() {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield rubro_1.Rubro.count();
        // evita insertar duplicados
        if (count > 0) {
            console.log("Rubros ya existen, seed omitido");
            return;
        }
        yield rubro_1.Rubro.bulkCreate([
            {
                nombre: "Manufactura",
                descripcion: "Fabricación de autopartes"
            },
            {
                nombre: "Ensamble",
                descripcion: "Ensamble de vehículos"
            },
            {
                nombre: "Electrónica Automotriz",
                descripcion: "Producción de componentes electrónicos"
            },
            {
                nombre: "Servicios Industriales",
                descripcion: "Servicios para la industria automotriz"
            },
            {
                nombre: "Logística",
                descripcion: "Transporte y logística automotriz"
            }
        ]);
        console.log("Seed de rubros ejecutado correctamente");
    });
}
