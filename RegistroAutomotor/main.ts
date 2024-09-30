import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { RegistroAutomotor } from "./registroAutomotor.ts";
const registro = new RegistroAutomotor();
const auto1 = new Auto("chevrolet", "ferrari", 2005, 2000, "Beige");
const moto1 = new Moto("Yamaha", "YZF-R3", 2021, 2020, "Negro");
const camion1 = new Camion("scania", "daf", 2018, 2017, "celeste");
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
console.log("Vehículos registrados:");
console.log(registro.obtenerTodosLosVehiculos());
auto1.setModificarAutos("lamborghini", "porsche", 2022, 2019, "rosa");
console.log("\nDespués de modificar el auto:");
console.log(registro.obtenerTodosLosAutos());
moto1.setModificarMoto("ducati", "aprilia", 2023, 2024, "violeta");
console.log("\nDespués de modificar la moto:");
console.log(registro.obtenerTodasLasMotos());
camion1.setModificarCamion("Volvo", "FH16", 2019, 2018, "naranja");
console.log("\nDespués de modificar el camión:");
console.log(registro.obtenerTodosLosCamiones());



