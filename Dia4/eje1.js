// Ejercicio 1: Objeto Persona con Propiedades Anidadas
const persona = {
    nombre: "Marcelo",
    edad: 30,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad Ejemplo",
        pais: "País Ejemplo"
    },
    mostrarInfo: function() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
};

console.log(persona.mostrarInfo());
console.log(`Dirección: ${persona.direccion.calle}, ${persona.direccion.ciudad}, ${persona.direccion.pais}`);


// Ejercicio 2: Objeto Libro con Propiedades Anidadas