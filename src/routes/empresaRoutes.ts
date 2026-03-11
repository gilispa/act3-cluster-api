import { Router } from "express";
import {
    crearEmpresa,
    obtenerEmpresas,
    obtenerEmpresaPorId,
    actualizarEmpresa,
    eliminarEmpresa
} from "../controllers/empresaController";

const router = Router();

router.get("/", obtenerEmpresas);
router.get("/:id", obtenerEmpresaPorId);
router.post("/", crearEmpresa);
router.patch("/:id", actualizarEmpresa);
router.delete("/", eliminarEmpresa);

export default router;