"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //explicita
    //implicita
    function Persona(nombresC, apellidosC, identificionC, estadoCivilC) {
        this.nombres = nombresC;
        this.apellidos = apellidosC;
        this.identificacion = identificionC;
        this.estadoCivil = estadoCivilC;
    }
    //Metodo para cambiar el estado civil
    Persona.prototype.cambiarEstadoCivil = function (nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
    };
    return Persona;
}());
exports.Persona = Persona;
