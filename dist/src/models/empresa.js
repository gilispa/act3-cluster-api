"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const rubro_1 = require("./rubro");
let Empresa = class Empresa extends sequelize_typescript_1.Model {
};
exports.Empresa = Empresa;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "descripcion", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "telefono", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "direccion", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => rubro_1.Rubro),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Empresa.prototype, "rubro_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => rubro_1.Rubro),
    __metadata("design:type", rubro_1.Rubro)
], Empresa.prototype, "rubro", void 0);
exports.Empresa = Empresa = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Empresas"
    })
], Empresa);
