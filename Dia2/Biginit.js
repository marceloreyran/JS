/*
BigInt (Enteros grandes)
Para números enteros muy grandes más allá del rango seguro (>2⁵³-1).*/ 

let numeroNormal = 9007199254740991; //Limite seguro 
let numeroGrande = 9007199254740992n; // BigInt (nota la 'n')
console.log(typeof numeroGrande); //Biginit

//Operacions con Biginit
let resultado = 10n + 20n ;
console.log(10n * 30n);

//NO se pueden mezclar con números normales

console.log(10n + 10); /*
TypeError: Cannot mix BigInt and other types, use explicit conversions
    at Object.<anonymous> (/Users/Marcelo/Desktop/javascript-practica/Dia2/Biginit.js:14:17) */