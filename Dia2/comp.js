/** Comparación por valor
Los primitivos se comparan por su valor, no por referencia.*/

console.log(5 === 5); //true
console.log("hola" === "hola"); //true
console.log(true === true);

//Los objetivos se comparan por referencia, no por valor.

let obj1 = {valor: 5};
let obj2 = {valor: 5};

console.log(obj1 === obj2);   // false (referencias diferentes)
console.log(obj1.valor === obj2.valor); // true (valores iguales)