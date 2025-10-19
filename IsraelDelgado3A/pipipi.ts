import { Empleado } from "./empleado.js";
import { Estudiante } from "./estudiante.js";
import{ Persona } from "./persona.js";
import { PersonaServicio } from "./personalservicio.js";
import { Profesor } from "./profesor.js";
// Crear instancias de las clases y mostrar sus datos
//Instancia de Persona
const persona = new Persona("Israel", "Delgado", "1564896245", "Soltero");
//metodo para cambiar estado civil
persona.cambiarEstadoCivil("Casado");

//Instancia de Estudiante
const estudiante = new Estudiante("Israel", "Delgado", "1564896245", "Soltero", "segundo", "2024A0001");
//metodo para matricular a un estudiante en un nuevo curso
estudiante.cambiarEstadoCivil("Casado");
estudiante.cambiarCurso("Tercero");

//Instancia de Empleado
const empleado = new Empleado("Israel", "Delgado", "1564896245", "Soltero", 1999, 101);
//metodo para reasignar despacho
empleado.cambiarEstadoCivil("Casado");
empleado.reasignardespacho(202);

//Instancia de Profesor
const profesor = new Profesor("Israel", "Delgado", "1564896245", "Soltero", 1999, 101, "Base de Datos");
//metodo para cambiar departamento
profesor.cambiarEstadoCivil("Casado");
profesor.reasignardespacho(202);
profesor.cambiarDepartamento("Programacion Orientada a Objetos");

//Instancia de PersonaServicio
const personaServicio = new PersonaServicio("Israel", "Delgado", "1564896245", "Soltero", 1999, 101, "Decanato");
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