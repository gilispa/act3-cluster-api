import { Sequelize } from "sequelize-typescript";
import { Empresa } from "../models/empresa";
import { Rubro } from "../models/rubro";
import { seedRubros } from "../seeds/rubroSeed";

const connection = new Sequelize({
    database: "cluster_db",
    dialect: "postgres",
    username: "cluster_user",
    password: "cluster123",
    host: "localhost",
    models: [Empresa, Rubro]
});

async function connectionDB() {
    try {
        await connection.authenticate();
        console.log("Conexión exitosa a PostgreSQL");
        await connection.sync();
        await seedRubros();
    } catch (error) {
        console.log("Error conectando a DB", error);
    }


}

export default connectionDB;