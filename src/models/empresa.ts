import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";

import { Rubro } from "./rubro";

@Table({
    tableName: "Empresas"
})
export class Empresa extends Model {

    @Column
    nombre!: string;

    @Column
    descripcion!: string;

    @Column
    telefono!: string;

    @Column
    email!: string;

    @Column
    direccion!: string;

    @ForeignKey(() => Rubro)
    @Column
    rubro_id!: number;

    @BelongsTo(() => Rubro)
    rubro!: Rubro;
}