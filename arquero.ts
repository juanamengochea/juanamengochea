import { personaje } from "./personaje";

export class arquero {
    protected nombre: string; 
    protected nivel: number; 10;
    protected vida: number; 100;
    protected atacar: string;
    protected defender: string;
    protected hechicero: string;
    protected luchador: string;
    protected arquero: string;
    constructor(nombre:string, _nivel:number, _atacar:string,_defender:string,_hechicero:string,_luchador:string,_arquero:string){
    this.nombre = nombre; 
    }
    public defenderTerritorio():void{
        return console.log("el luchador ataco al enemigo")
        }
        public getvida(): Number{
            return this.vida;
            }
            public getnivel(): Number{
            return this.nivel;
            }
            public getnombre(): string{
            return this.nombre;
            }
            public getatacar(): string{
            return this.atacar;
            }
            public getdefender(): string{
            return this.defender;
            }
            }
            abstract class arco extends personaje{
                    arma: string;
                    habilidadespecial: string;   
                }
                
