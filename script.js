// Ejemplo de función arrow sin parámetros que devuelve un string
const saludar = () => {
    return "Hello, in the following information you can find the results";
  };
  
  console.log(saludar()); 
  
// Ejemplo de función arrow sin parámetros
const obtenerFechaActual = () => {
    return new Date();
  };
  
  console.log(); // Imprime la fecha y hora actual
  console.log(`Time of results: ${obtenerFechaActual()}`);
  
  // Ejemplo de función arrow con un parámetro
const calcularCuadrado = (num) => {
    return num * num;
  };
  
  const numero = 5;
  console.log(`El cuadrado de ${numero} es: ${calcularCuadrado(numero)}`); // Imprime "El cuadrado de 5 es: 25"
  
  // Ejemplo de función arrow con más de dos parámetros y métodos propios de JavaScript
const calcularPromedio = (num1, num2, num3) => {
    const suma = num1 + num2 + num3;
    return suma / 3;
  };
  
  let num1 = 10;
  let num2 = 20;
  let num3 = 30;
  
  console.log(`El promedio de ${num1}, ${num2} y ${num3} es: ${calcularPromedio(num1, num2, num3)}`); // Imprime "El promedio de 10, 20 y 30 es: 20"
  // Ejemplo de función arrow con más de dos parámetros que realiza una concatenación de strings
const concatenarNombres = (nombre1, nombre2, nombre3) => {
    return `${nombre1} ${nombre2} ${nombre3}`;
  };
  
  const nombre1 = "Juan";
  const nombre2 = "María";
  const nombre3 = "Pedro";
  console.log(`Nombres concatenados: ${concatenarNombres(nombre1, nombre2, nombre3)}`); // Imprime "Nombres concatenados: Juan María Pedro"
  