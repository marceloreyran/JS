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