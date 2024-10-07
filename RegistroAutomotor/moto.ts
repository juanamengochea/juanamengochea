import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, año: number, añofabricacion: number, color?: string){
        super(marca,modelo,año,añofabricacion,color)
    }
}