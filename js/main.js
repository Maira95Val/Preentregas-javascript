const NOMBRE = prompt("Ingrese su nombre");
const MATERIA = prompt("Ingrese el nombre de la materia");

const NOTA1 = Number(prompt("Ingrese la nota del primer parcial"));
const NOTA2 = Number(prompt("Ingrese la nota del segundo parcial"));

const PROMEDIO = (NOTA1 + NOTA2)/2;

alert(NOMBRE + ", tu promedio en " + MATERIA+ " es: " + PROMEDIO);