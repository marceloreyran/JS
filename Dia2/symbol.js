/**Symbol (Símbolo)
Crea valores únicos e irrepetibles. Se usa en casos avanzados. */
let id1 = Symbol("usuario");
let id2 = Symbol("usuario");

console.log(id1 === id2); // false (cada Symbol es único)

// Se usa para crear propiedades privadas
let objeto = {
  [id1]: "Valor 1"
};

console.log(objeto[id1]); // "Valor 1"
console.log(objeto[id2]); // undefined