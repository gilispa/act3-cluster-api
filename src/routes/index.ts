import { Router } from "express";
import empresaRoutes from "./empresaRoutes";

const apiRouter = Router();

apiRouter.use("/empresas", empresaRoutes);

export default apiRouter;