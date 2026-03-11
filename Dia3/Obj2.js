//Ejercicio2

const tienda = {
    nombre: "PCel",
    productos: [
         {  nombre: "laptop", precio: 20000, cantidad: 5},
         {  nombre: "tablet", precio: 10000, cantidad: 10},
         {  nombre: "monitor", precio: 5000, cantidad: 9}
    ],
    
    calTotal: function() { 
        return this.productos.reduce((total, producto) =>{
            return total + (producto.precio * producto.cantidad)
        }, 0 );
    } 
};

console.log(tienda.calTotal());