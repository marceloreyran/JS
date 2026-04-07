/* Proyecto integrador

Junta todo lo aprendido en un solo proyecto:

Ejercicio final: Sistema de biblioteca */

class libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
}

class Biblioteca{
    constructor(){
        this.Libros = [];
    }
    agregarLibro(libro){
        this.Libros.push(libro);
    }

    prestarLibro(titulo){
        const Libro = this.Libros.find(libro => libro.titulo === titulo);
        if (libro) libro.prestado = false;
    }
    mostrarDisponibles(){
        const disponibles = this.Libros.filter(libro => !libro.prestado);
        console.log(disponibles);
    }
};

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(new libro("El Quijote","Cervantes"));
biblioteca.agregarLibro(new libro("1984","Orwell"));
biblioteca.prestarLibro("1984");
biblioteca.mostrarDisponibles();

