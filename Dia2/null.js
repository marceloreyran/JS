/* Null (Nulo)
Representa ausencia de valor intencional. Solo existe un valor: null. */

let usuario = null; // No hay usuario

//Se asigna deliberadamente para indicar "vacio"
function buscarUsuario(id){
    if (!encontrado) {
        return null; //Explicitamente returna nada 
    }
    return usuario;
} 

console.log(typeof null); //"object" (bug de JavaScript)