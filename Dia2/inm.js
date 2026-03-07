//Características importantes
//Inmutabilidad
//Los primitivos no pueden cambiar. Cuando "modificas" un primitivo, en realidad estás creando uno nuevo.

let a = 5;
let b = a; //b = 5

a = 10; // a cambia, pero b sigue siendo 5

console.log(a);
console.log(b);

//con Strings 
let str1 = "hola";
let str2 = str1;
str1 = "adios"; // str1 cambia, str2 no

console.log(str1);  // "adiós"
console.log(str2); // "hola"