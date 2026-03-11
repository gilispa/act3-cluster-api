import { Table, Model, Column, HasMany } from "sequelize-typescript";
import { Empresa } from "./empresa";

@Table({
    tableName: "Rubros"
})
export class Rubro extends Model {

    @Column
    nombre!: string;

    @Column
    descripcion!: string;

    @HasMany(() => Empresa)
    empresas!: Empresa[];
}