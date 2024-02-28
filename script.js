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
let calcularCuadrado = (num) => {
    return num * num;
  };
  
  let numero = 5;
  console.log(`El cuadrado de ${numero} es: ${calcularCuadrado(numero)}`); // Imprime "El cuadrado de 5 es: 25"
  
  // Ejemplo de función arrow con más de dos parámetros y métodos propios de JavaScript
let calcularPromedio = (num1, num2, num3) => {
    let suma = num1 + num2 + num3;
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
  
  let nombre1 = "Sebastian";
  const nombre2 = "Valencia";
  let nombre3 = "Vargas";
  console.log(`Nombres concatenados: ${concatenarNombres(nombre1, nombre2, nombre3)}`); 
  

  // Ejemplo de función arrow que genera un número aleatorio entre un rango dado
  //la funcion de flecha recibe dos parametros min, max
  //math.random() genera un nymero decima entre 0 - 1
  //math.floor()redondea el numero hacia abajo asegurado un numero entero
  //+min = ajusta el resultado para que este dentro del rango agregando el valor minimo
const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const numeroAleatorio = generarNumeroAleatorio(3, 33);
  console.log(`The new random number is: ${numeroAleatorio}`); 
  
  