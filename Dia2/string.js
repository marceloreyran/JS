
//String (Cadena de texto)

let nombre = "Marcelo";
let apellido = 'Reyna';
let presentacion = `Me llamo ${nombre} ${apellido}`;

//propiedades y métodos 
console.log(nombre.length); // 7
console.log(nombre.toUpperCase()); //Marcelo
console.log(nombre[0]);

//los strings son Inmutables
let srt = "hola";
srt[0] ="H"; // Esto NO funciona, str sigue siendo "hola"
srt = "Hola"; // Debes reasignar la variable completa