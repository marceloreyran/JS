/**
 Ejercicio 5: Objeto Auto con Propiedades Anidadas
 Practica objetos dentro de objetos.
 */

 const auto= {
    marca: "BMW",
    modelo: "X5",
    año: 2022,
    motor: {
        tipo: "V6",
        potencia: "300 HP",
        cilindrada: "3.0 L"
    }, 
     dueño: {
        nombre: "Marcelo",
        tel: "8125990011"
     },
      
     mostrarInfo: function(){
        return `Especificiones del auto: ${this.marca} ${this.modelo} ${this.año}`;
     }
 };

 console.log(auto.mostrarInfo());