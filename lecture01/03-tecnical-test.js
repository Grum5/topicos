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

	constructor(titulo, autor, anio, genero){
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

function mostrarLibros( libros ){

    for( libro of libros ){
        console.log( libro.titulo )
    }

}


function mostrarAutoresAlfabeticamente( libros ){

    // Ordenar los libros por autor
    let autores = libros.sort( (a, b) => a.autor.localeCompare(b.autor) )

    // Mostrar los autores
    for( index of autores ){
        console.log( index.autor )
    }

}

function mostrarGeneroAlfabeticamente( libros, genero ){

    // Filtrar los libros por genero
    let generoSolicitado = prompt('Ingrese el genero que desea buscar')
    
    // Filtrar los libros por genero
    let librosFiltrados = libro.filter( libro => libro.genero == generoSolicitado.toLocaleLowerCase() )

    // Mostrar los libros
    for( libro of librosFiltrados ){
        console.log( libro.informacionLibroPorGenero() )
    }

}

function mostrarLibroPorGenero( libros, genero ){

    // Filtrar los libros por genero
    let librosFiltrados = libros.filter( libro => libro.genero == genero )

    // Mostrar los libros
    for( libro of librosFiltrados ){
        console.log( libro.informacionTotalLibro() )
    }

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

let running = true

while( !running ){
    let opcion = prompt('Elige una opcion: \n 1. Mostrar todos los libros \n 2. Mostrar autores alfabeticamente \n 3. Mostrar libros por genero alfabeticamente \n 4) Mostrar libros filtrados por genero \n 0. Salir')

    switch( opcion ){
        case '1':
            mostrarLibros( libros )
            break
        case '2':
            mostrarAutoresAlfabeticamente( libros )
            break
        case '3':
            mostrarGeneroAlfabeticamente( libros )
            break
        case '4':
            mostrarLibroPorGenero( libros )
            break
        case '0':
            running = false
            break
        default:
            console.log('Opcion no valida')
    }
}
