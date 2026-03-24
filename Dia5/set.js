/** Set new Set()

¿Para qué sirve? Cuando necesitas una lista donde no se repitan los valores. Los duplicados se ignoran automáticamente.

Caso real: Registrar usuarios únicos que visitaron una página.
 */

// ─── CREAR ───────────────────────────────────────────
// Sin Set: los duplicados se cuelan
const visitas = ["Carlos", "Ana", "Carlos", "Luis", "Ana", "Ana"];
console.log(visitas);
/// Con Set: automáticamente elimina duplicados
const visitasUnicas = new Set(visitas);
console.log(visitasUnicas.size);

//Agregar un nuevo valor a un Set
visitasUnicas.add("Pedro");
visitasUnicas.add("Ana"); // No se agrega porque ya existe
console.log(visitasUnicas);

//Verificar si un valor existe en el Set
console.log(visitasUnicas.has("carlos"));
console.log(visitasUnicas.has("Ana"));

//Eliminar un valor de set
console.log(visitasUnicas.delete("Ana"));
console.log(visitasUnicas.size);

//Recorrer un set
visitasUnicas.forEach((visitante)=>
console.log(visitante));

//Truco util para eliminar duplicados de un array rapidamente
const numeros =[1,2,3,4,5,6,6,7,7,8,8];
const sinDuplicados = [...new Set(numeros)];
console.log(sinDuplicados);