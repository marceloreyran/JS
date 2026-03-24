//Array []

/** 
 * > ¿Para qué sirve? Para guardar listas ordenadas de cosas. Como una fila de cajones numerados.

Caso real: Lista de productos en un carrito de compras.
 */


//Crear un array vacío
let carrito = ["agua", "pan", "leche"];

//-----Leer un elemento del array----
console.log(carrito[0]);
console.log(carrito.length);

//-----Agregar un elemento al final del array----
carrito.push("huevos","verduras");
console.log(carrito);

//-----Agregar un elemento al principio del array----
console.log(carrito.unshift("uvas"));
console.log(carrito);

//--Eliminar el ultimo elemento del array
carrito.pop("verduras");
console.log(carrito);

//Elimina el primer elemento del array 
carrito.shift("uvas");
console.log(carrito);

//--Buscar un elemento en el array 
console.log(carrito.includes("pan"));
console.log(carrito.indexOf("leche"));


//Recorrer un array con un ciclo
carrito.forEach((producto, i)=> {
    console.log(`Producto ${i + 1}: ${producto}`);
})

//Transformar un array 
const precios = [10,20,30];
const preciosIVA = precios.map(precio => precio * 1.21);
console.log(preciosIVA);

//Filtrar un array 
const preciosAltos = precios.filter(precios => precios > 19);
console.log(preciosAltos);