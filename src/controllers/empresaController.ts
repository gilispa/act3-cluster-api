import { RequestHandler } from "express";
import { Empresa } from "../models/empresa";

export const crearEmpresa: RequestHandler = async (req, res) => {
    try {

        const empresa = await Empresa.create(req.body);

        res.status(201).json(empresa);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const obtenerEmpresas: RequestHandler = async (req, res) => {
    try {

        const empresas = await Empresa.findAll();

        res.status(200).json(empresas);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const obtenerEmpresaPorId: RequestHandler = async (req, res) => {
    try {

        const id = Number(req.params.id);

        const empresa = await Empresa.findByPk(id);

        res.status(200).json(empresa);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const actualizarEmpresa: RequestHandler = async (req, res) => {
    try {

        const id = Number(req.params.id);

        await Empresa.update(req.body, {
            where: { id }
        });

        res.json({ mensaje: "Empresa actualizada" });

    } catch (error) {
        res.status(500).json(error);
    }
};

export const eliminarEmpresa: RequestHandler = async (req, res) => {
    try {

        const { id } = req.body;

        await Empresa.destroy({
            where: { id }
        });

        res.json({ mensaje: "Empresa eliminada" });

    } catch (error) {
        res.status(500).json(error);
    }
};