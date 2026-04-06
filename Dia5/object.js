// Object {}
//> ¿Para qué sirve? Para representar una entidad del mundo real con características (propiedades) y acciones (métodos). Es la estructura más usada en JavaScript.

//Crear
const empleado = {
    //propiedades datos
    nombre: "Ricardo",
    edad: 34,
    puesto: "Desarrollador",
    salario: 40000,
    activado: true,

    //Objeto anidado
    contacto: {
        email: "ricardo@example.com",
        tel: "555-1234",

    },
    habilidades: ["node.js","javascript","react","angular","next.js"],

    //metodos (funciones dentro de un objeto)
    saludar(){
        return `hola mi nombre es: ${this.nombre} y soy ${this.puesto}`;
    },
    aplicarAumento(porcentaje){
        this.salario += this.salario * (porcentaje / 100);
        return `El nuevo salario de ${this.nombre} es: ${this.salario}`;
    }

};

/*
//Leer 
console.log(empleado);
console.log(empleado.nombre);
console.log(empleado.habilidades[2]);

//Modificar
empleado.edad = 45;
empleado.puesto = "Devops and " + "Senior Developer";
delete empleado.activado;
console.log(empleado.aplicarAumento(20));
console.log(empleado.puesto);
console.log(empleado.salario);*/

//Recorrer un objeto
Object.keys(empleado).forEach(clave => {
    console.log(`Key: ${clave}`);
});

Object.entries(empleado).forEach(([clave, valor]) => {
  console.log(`${clave} → ${valor}`);
});


//Copiar un objeto 
const copia = {...empleado};
const copia2 = Object.assign({}, empleado);
console.log(copia);


// Clases 
// Clases Basicas


class Animal {
    constructor(animal,sonido){
        this.animal = animal;
        this.sonido = sonido;
    }
    hablar(){
        console.log("el "+ this.animal + " hace un:" + this.sonido);
    }
}

const perro  = new Animal("gato", "miau");
const gato = new Animal("perro", "guau");

gato.hablar();
perro.hablar();

//Recorrer un objeto 

const notas = {
    mate:9, español:8, historia:9, ingles:9
};

//Recorrer claves y valores 
for (let materia in notas){
    console.log(materia + ":" + notas[materia]);
}

//Obtener arrays de claves/valores
console.log(Object.keys(notas));
console.log(Object.values(notas));

//Herencia (extends)
 class vehiculo {
    constructor(marca,modelo){
        this.marca = marca;
        this.velocidad = this.velocidad;
    }
    mover(){
        console.log(this.marca + " se esta moviendo a una " + this.velocidad + " de km/h");
    }
 }
 class Moto extends vehiculo{
    constructor(marca,modelo,tipo){
        super(marca,modelo);
        this.tipo = this.tipo;
    }
    info(){
        console.log("Moto" + this.tipo +  " - " + this.marca);
    }
 }

 const moto = new Moto( "Honda , 130, deportiva");
 moto.mover();
 moto.info();

