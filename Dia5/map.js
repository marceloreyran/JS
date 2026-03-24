/**
 * @author: MontDev
 * 
 */

//Map new Map()

/**
 ¿Para qué sirve? Para guardar pares clave-valor donde la clave puede ser cualquier tipo (número, objeto, función, etc.), a diferencia del Object que solo acepta strings.
Caso real: Guardar los puntajes de jugadores en un juego.
 */

const puntajes = new Map();
puntajes.set('jugador1', 1000);
puntajes.set('jugador2',1500);
puntajes.set('jugador3',2000);

// La clave puede ser CUALQUIER tipo:
puntajes.set(1, "nivel uno")
puntajes.set(true, "activo")

//Leer (get)
console.log(puntajes.get('jugador1'));
console.log(puntajes.get("jugador2"));
console.log(puntajes.get("jugador3"));

//Verificar (has)
console.log(puntajes.has('jugador1'));
console.log(puntajes.has('jugador4'));

//Recorrer (forEach)

puntajes.forEach((puntajes, jugador)=>{
    console.log(`${jugador}: ${puntajes} puntos`);
});

//Obtener un ganador 

let maxPuntaje = 0;
let ganador= "";
puntajes.forEach((puntajes,jugador) =>{
    if(puntajes > maxPuntaje){
        maxPuntaje = puntajes;
        ganador = jugador;
    }
});
console.log(`Ganador: ${ganador} con ${maxPuntaje} puntos`);