//Este es un objeto basico (persona)

/*const persona = {
    nombre: "mario",
    apellido: "Rangel",
    edad:30,
    ciudad: "CDMX"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);*/

//objeto con metodo simple 

const perro = {
    nombre: "lobo",
    raza: "husky",
    edad: "3 años",
    saludar (){
        console.log("guau guau soy " + this.nombre);
    }
};

perro.saludar();