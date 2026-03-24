// ─── CREAR ───────────────────────────────────────────
const carrito = ["Laptop", "Mouse", "Teclado"];
//               índice 0    índice 1   índice 2

// ─── LEER ────────────────────────────────────────────
console.log(carrito[0]);        // "Laptop"  → accedes por posición
console.log(carrito.length);    // 3         → cuántos elementos hay

// ─── AGREGAR ─────────────────────────────────────────
carrito.push("Monitor");        // agrega al FINAL
carrito.unshift("Auriculares"); // agrega al INICIO
console.log(carrito);
// ["Auriculares", "Laptop", "Mouse", "Teclado", "Monitor"]

// ─── ELIMINAR ────────────────────────────────────────
carrito.pop();                  // elimina el ÚLTIMO
carrito.shift();                // elimina el PRIMERO
console.log(carrito);
// ["Laptop", "Mouse", "Teclado"]

// ─── BUSCAR ──────────────────────────────────────────
console.log(carrito.includes("Mouse"));   // true  → ¿existe?
console.log(carrito.indexOf("Teclado"));  // 2     → ¿en qué posición?

// ─── RECORRER ────────────────────────────────────────
carrito.forEach((producto, i) => {
  console.log(`Producto ${i + 1}: ${producto}`);
});
// Producto 1: Laptop
// Producto 2: Mouse
// Producto 3: Teclado

// ─── TRANSFORMAR ─────────────────────────────────────
const precios = [1500, 25, 80];
const conIVA = precios.map(precio => precio * 1.16);
console.log(conIVA); // [1740, 29, 92.8]  → nuevo array modificado

// ─── FILTRAR ─────────────────────────────────────────
const caros = precios.filter(precio => precio > 100);
console.log(caros); // [1500]  → solo los que cumplen la condición

// ─── SUMAR TODO ──────────────────────────────────────
const total = precios.reduce((acum, precio) => acum + precio, 0);
console.log(total); // 1605  → reduce todo a un solo valor