class Libro{

	constructor(titulo, autor, anio, genero){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
    }

    informacionTotalLibro(){
        // template string se hace con backstick
        return `El libro se llama ${titulo} 
        y lo escribio el autor(a) ${autor} en el año de ${anio} 
        y pertenece al género ${genero}`
    }

}

const libros = [
    libro1 = new Libro,
    libro2 = new Libro,
    libro3 = new Libro
]

while( libros.legth < 3 ){
    let titulo = prompt('Nombre del libro')
    let autor = prompt('Nombre del autor')
    let anio = prompt('Año del libro')
    let genero = prompt('Genero del libro')

    if titulo
}



