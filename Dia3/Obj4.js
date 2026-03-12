//Ejercicio 4: Objeto Banco (Más Complejo)

//Crea un objeto que simule una cuenta bancaria con operaciones.

const cuenta = {
    titular: "Marcelo",
    saldo: 10000,
    historial: ["Ene","Feb","Marz"],

    depositar: function(cantidad){
        this.saldo += cantidad;
        this.historial.push(`Depositar: +${cantidad}`);
        return `Deposito de ${cantidad} pesos fue realizado, el saldo actual es: ${this.saldo}`
    },

    retirar: function(cantidad){
        if (cantidad > this.saldo){
            return "saldo insuficiente";
        }
        this.saldo -= cantidad;
        this.historial.push(`Retirar: -${cantidad}`);
        return `El retiro de ${cantidad} pesos fue realizado, el saldo actual es: ${this.saldo}`
    },
    verSaldo: function(cantidad){
        return `El saldo disponible es de $${this.saldo} pesos`;
    },

    verHistorial: function(){
        return `Este es el historial de transacciones: ${this.historial.join(", ")}`;

    }
};



console.log(cuenta.depositar(1000));
console.log(cuenta.retirar(5100));
console.log(cuenta.verSaldo());
console.log(cuenta.verHistorial());

//Esta es una simulación básica de una cuenta bancaria con operaciones de depósito, retiro, consulta de saldo e historial de transacciones. Puedes expandirla agregando más funcionalidades como transferencias entre cuentas, intereses, etc.
//Recuerda que este es un ejemplo simple y no debe usarse para aplicaciones reales de banca, ya que carece de seguridad y validaciones necesarias.