export class RegistroAutomotor {
    constructor(nombre) {
        this.nombre = nombre;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    agregarAuto(auto) {
        this.autos.push(auto);
    }

    agregarMoto(moto) {
        this.motos.push(moto);
    }

    agregarCamion(camion) {
        this.camiones.push(camion);
    }

    obtenerTodosLosVehiculos() {
        const autosInfo = this.autos.map(auto => auto.getAuto()).join('\n');
        const motosInfo = this.motos.map(moto => moto.getMoto()).join('\n');
        const camionesInfo = this.camiones.map(camion => camion.getCamion()).join('\n');
        return `Autos:\n${autosInfo}\n\nMotos:\n${motosInfo}\n\nCamiones:\n${camionesInfo}`;
    }
}
