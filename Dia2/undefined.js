//Undefined (Indefinido)
//Representa una variable declarada pero sin valor asignado.

let variable;
console.log(variable); // undefined

//parametros no proporcionados
function saludar(nombre){
    console.log(nombre); //undefined si no se pasa argumento 
}

saludar(); //undefined


//Diferencia: undefined vs null 

let a = undefined; //sin valor asignado
let b = null; //vacio intencional 
console.log(a === b); //false (tipos diferentes)
console.log(a == b); //true (por conversion )