"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_js_1 = require("./empleado.js");
var estudiante_js_1 = require("./estudiante.js");
var persona_js_1 = require("./persona.js");
var personalservicio_js_1 = require("./personalservicio.js");
var profesor_js_1 = require("./profesor.js");
// Crear instancias de las clases y mostrar sus datos
//Instancia de Persona
var persona = new persona_js_1.Persona("Israel", "Delgado", "1564896245", "Soltero");
//metodo para cambiar estado civil
persona.cambiarEstadoCivil("Casado");
//Instancia de Estudiante
var estudiante = new estudiante_js_1.Estudiante("Israel", "Delgado", "1564896245", "Soltero", "segundo", "2024A0001");
//metodo para matricular a un estudiante en un nuevo curso
estudiante.cambiarEstadoCivil("Casado");
estudiante.cambiarCurso("Tercero");
//Instancia de Empleado
var empleado = new empleado_js_1.Empleado("Israel", "Delgado", "1564896245", "Soltero", 1999, 101);
//metodo para reasignar despacho
empleado.cambiarEstadoCivil("Casado");
empleado.reasignardespacho(202);
//Instancia de Profesor
var profesor = new profesor_js_1.Profesor("Israel", "Delgado", "1564896245", "Soltero", 1999, 101, "Base de Datos");
//metodo para cambiar departamento
profesor.cambiarEstadoCivil("Casado");
profesor.reasignardespacho(202);
profesor.cambiarDepartamento("Programacion Orientada a Objetos");
//Instancia de PersonaServicio
var personaServicio = new personalservicio_js_1.PersonaServicio("Israel", "Delgado", "1564896245", "Soltero", 1999, 101, "Decanato");
//metodo para cambio de seccion
personaServicio.cambiarEstadoCivil("Casado");
personaServicio.reasignardespacho(202);
personaServicio.cambiarSeccion("Biblioteca");
// Mostrar los datos de las instancias
console.log(persona);
console.log(estudiante);
console.log(empleado);
console.log(profesor);
console.log(personaServicio);
