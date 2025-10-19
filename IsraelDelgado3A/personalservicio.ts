import { Empleado } from "./empleado.js";
export class PersonaServicio extends Empleado {
    public seccion : string;

    constructor(nombres:string, apellidos:string, identificacion:string,
        estadoCivil:string, anioIncorporacion:number, numeroDespacho:number, seccionC:string,){
        super(nombres,apellidos,identificacion,estadoCivil, anioIncorporacion, numeroDespacho);
        this.seccion = seccionC;
    }

    //Metodo para cambiar de seccion
    public cambiarSeccion(nuevaSeccion:string):void{
        this.seccion = nuevaSeccion;
    }
}