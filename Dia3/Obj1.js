//Estos son unos ejercicios de objetos para poder practicar un poco más el tema, espero que les guste y les sirva para aprender un poco más sobre objetos en JavaScript.

const estudiante = {
    nombre: "Marcelo",
    matricula: "1484",
    materia: "Inlges",
    calificación: 70,
    aprobó: function(){
        return this.calificación >= 70 ? "Aprobado" : "Reprobado";
    }
};

console.log(estudiante.aprobó()); // Debería imprimir "aprobado" ya que la calificación es 88, que es mayor a 70.