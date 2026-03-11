import express from "express";
import morgan from "morgan";
import apiRouter from "./src/routes";
import connectionDB from "./src/connection/connection";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use(apiRouter);

connectionDB();

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});