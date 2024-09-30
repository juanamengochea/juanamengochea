export class Camion {
    private marca: string;
    private modelo: string;
    private tipo: string;
    private año: number;
    private añofabricacion: number;
    private color: string;

    constructor(marca: string, modelo: string, año: number, añofabricacion: number, color?: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.añofabricacion = añofabricacion;
        this.color = color || "violeta";
    }

    getCamion(): string {
        return `Camión - Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Año de Fabricación: ${this.añofabricacion}, Color: ${this.color}`;
    }

    setModificarCamion(marcanueva?: string, modelonuevo?: string, añonuevo?: number, nuevoañofabricacion?: number, colornuevo?: string): void {
        if (marcanueva) {
            this.marca = marcanueva;
        }
        if (modelonuevo) {
            this.modelo = modelonuevo;
        }
        if (añonuevo) {
            this.año = añonuevo;
        }
        if (nuevoañofabricacion) {
            this.añofabricacion = nuevoañofabricacion;
        }
        if (colornuevo) {
            this.color = colornuevo;
        }
    }
}
