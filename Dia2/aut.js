/** Auto-boxing (Envolvimiento automático)
JavaScript convierte temporalmente primitivos en objetos para acceder a métodos. */

let numero = 42;
console.log(numero.toString()); // "42" (number se envuelve temporalmente)

let texto = "hola";
console.log(texto.toLocaleUpperCase()); // "HOLA" (string se envuelve)

let palabra = "Mundo";
console.log(palabra.toLowerCase());// "mundo" (string se envuelve)
// Es como si internamente hiciera:
// new String("hola").toUpperCase(