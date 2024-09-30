import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
export class RegistroAutomotor {
    private nombre : string;
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    obtenerTodosLosAutos(): string {
        return this.autos.map(auto => auto.getAuto()).join("\n");
    }

    obtenerTodasLasMotos(): string {
        return this.motos.map(moto => moto.getMoto()).join("\n");
    }

    obtenerTodosLosCamiones(): string {
        return this.camiones.map(camion => camion.getCamion()).join("\n");
    }

    obtenerTodosLosVehiculos(): string {
        return `Autos:\n${this.obtenerTodosLosAutos()}\n\nMotos:\n${this.obtenerTodasLasMotos()}\n\nCamiones:\n${this.obtenerTodosLosCamiones()}`;
    }
}
