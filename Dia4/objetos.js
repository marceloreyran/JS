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

/*const perro = {
    nombre: "lobo",
    raza: "husky",
    edad: "3 años",
    saludar (){
        console.log("guau guau mi nombre es " + this.nombre);
    }
};

perro.saludar();
console.log(perro.raza);*/

//objeto con varios metodos 

/*const calculadora ={
    sumar(a,b) {return a + b;   },
    restar(a,b) {return a -b; },
    multiplicar(a,b){return a *b;}
};

console.log(calculadora.sumar(10,20));
console.log(calculadora.sumar(10,50));
console.log(calculadora.multiplicar(500,10));*/

//objeto con array adentro 

const clase = {
    materia: "programacion",
    alumnos: ["mario","ana","matias"],
    mostrarAlumnos(){
        this.alumnos.forEach(alumnos=> {console.log(alumnos);

        });
    }
};

clase.mostrarAlumnos();
console.log(clase.materia);
