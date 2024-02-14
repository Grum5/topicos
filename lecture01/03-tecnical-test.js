/*

    1. Crear una clase libro
    2. La clase libro tendra titulo, autor, año, genero
    3. Crear un metodo que devuelva toda la informacion del libro
    4. Pide 3 libros y guárdalos en un array
    5. Los libros se introducirán al arrancar el programa pidiendo los datos 
    con prompt
    6. Validar que los campos no se introduzcan vacios
    7. Validar que el año sea un número y que tenga 4 digitos
    8. Validar que el genero sea: aventuras, terror o fantasía
    9. Crea una función que muestre todos los libros
    10. Crea una función que muestre los autores ordenados alfabéticamente
    11. Crea una función que pida un genero y muestre la información de los libros
    que pertenezcan a ese genero usando un metodo que devuelva la informacion

    Javier Osvaldo Perez Bretado - 22760591

*/

class Libro{

	constructor(titulo, autor, año, genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    informacionTotalLibro(){
        // template string se hace con backstick
        return `El libro se llama ${titulo} 
        y lo escribio el autor(a) ${autor} en el año de ${año} 
        y pertenece al género ${genero}\n`
    }

    informacionLibroPorGenero(){
        return `El libro se llama ${titulo} 
        y lo escribio el autor(a) ${autor} en el año de ${año}\n`
    }

}


const mostrarLibros = () => {
    
    libros.map( libro => console.log( libro.informacionTotalLibro() ) )

}

const mostrarAutoresAlfabeticamente = () => {

    let autoresAlfabeticamente = libros.map( libro => libro.autor )
    autoresAlfabeticamente.sort()
    console.log( autoresAlfabeticamente )

}

const mostrarGeneroAlfabeticamente = () => {

    let generosAlfabeticamente = libros.map( libro => libro.genero )
    generosAlfabeticamente.sort()
    console.log( generosAlfabeticamente )

}

const mostrarLibroPorGenero = () => {
  
    // Filtrar los libros por genero
    let generoSolicitado = prompt('Ingrese el genero que desea buscar')
    
    libros.map( libro => {
        if( libro.genero.toLowerCase() == generoSolicitado.toLowerCase() ){
            console.log( libro.informacionLibroPorGenero() )
        }
    })
}

// Array vacio para guardar los libros
const libros = []

// Array que guarda los generos validos
const generos = ['aventuras', 'terror', 'fantasia']

// Ciclo para pedir los libros

while( libros.legth < 3 ){
    console.log|('Ingresa los datos del libro')
    let titulo = prompt('Nombre del libro')     // Pedir el titulo
    let autor = prompt('Nombre del autor')      // Pedir el autor
    let año = prompt('Año del libro')           // Pedir el año
    let genero = prompt('Genero del libro')     // Pedir el genero

    if ( titulo != ''                                   // Evaluar que titulo no este vacio
        && autor != ''                                  // Evaluar que autor no este vacio
        && !isNaN(año)                                  // Evaluar que año sea un numero
        && año.length == 4                              // Evaluar que año tenga 4 digitos 
        && generos.includes( genero.toLowerCase() ) )   // Evaluar que el genero sea valido
    {

        // Guardar el libro en el array
        libros.push( new Libro( titulo, autor, año, genero ) )
    
    }

}
