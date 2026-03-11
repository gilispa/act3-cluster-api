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
exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresaPorId = exports.obtenerEmpresas = exports.crearEmpresa = void 0;
const empresa_1 = require("../models/empresa");
const crearEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresa_1.Empresa.create(req.body);
        res.status(201).json(empresa);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearEmpresa = crearEmpresa;
const obtenerEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresas = yield empresa_1.Empresa.findAll();
        res.status(200).json(empresas);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.obtenerEmpresas = obtenerEmpresas;
const obtenerEmpresaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const empresa = yield empresa_1.Empresa.findByPk(id);
        res.status(200).json(empresa);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.obtenerEmpresaPorId = obtenerEmpresaPorId;
const actualizarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        yield empresa_1.Empresa.update(req.body, {
            where: { id }
        });
        res.json({ mensaje: "Empresa actualizada" });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.actualizarEmpresa = actualizarEmpresa;
const eliminarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield empresa_1.Empresa.destroy({
            where: { id }
        });
        res.json({ mensaje: "Empresa eliminada" });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.eliminarEmpresa = eliminarEmpresa;
