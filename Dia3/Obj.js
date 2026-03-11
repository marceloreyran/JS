//Estructuras de Datos Básicas en JavaScript
/**
 * Primitivios
 * String: "hola", 'mundo', `plantilla`
 * Number: 42, 3.14, -1, 4.14, infiniti, -infiniti, NaN
 * Boolean: true, false
 * Null: null
 * Undefined: undefined
 * Symbol: Symbol('descripcion')
 * Bigint: 9007199254740991n
 */

//Objetos
 const persona = {
    nombre : "Marcelo",
    edad : 30,
    trabajo: "Desarrollador",
    municipio : "San Pedro",
    saludar(){console.log("Hola soy  " + this.nombre); }
    };

    console.log(persona.nombre);
    persona.saludar();

//Marcas de autos
    const marcas = {
    mazda: "CX-30",
    toyota: "corolla",
    nissan: "sentra",
    auto() {console.log("El mejor auto de mazda es: "  +  marcas.mazda ); }
};

marcas.auto();