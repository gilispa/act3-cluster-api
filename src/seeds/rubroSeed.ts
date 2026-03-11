import { Rubro } from "../models/rubro";

export async function seedRubros() {

    const count = await Rubro.count();

    // evita insertar duplicados
    if (count > 0) {
        console.log("Rubros ya existen, seed omitido");
        return;
    }

    await Rubro.bulkCreate([
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
}