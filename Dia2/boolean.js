// Boolean (Verdadero o Falso) 
// Solo tiene dos valores posibles: true o false.

let activo = true;
let eliminado = false;

// Se usan en condicionales 
 
if (activo) {
    console.log("Esta activo es true");
}

//valores "falsy" (se comportan como false)

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

// Valores "truthy" (se comportan como true)

console.log(Boolean(1)); //true 
console.log(Boolean("texto")); // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true