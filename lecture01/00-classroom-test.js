/*
* Manejo de objetos
*
* 1. Crea una clase persona con las propiedades: nombre (sin apellidos), direccion, telefono, edad
* 2. Crea un array para almacenar 5 personas
* 3. Captura las personas con un prompt
* 4. Elabora una función para que ningún campo quede vacío
* 5. Elabora una función para que verifique que la edad es un número
* 6. Crea una función para mostrar el promedio de edad
* 7. Crea una función para mostrar el nombre de la persona por orden alfabético y todos los muestre en mayúsculas.

    Javier Osvaldo Perez Bretado - 22760591

*/


class Persona{

    constructor( nombre, direccion, telefono, edad ){
        
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.edad = edad
    
    }



}




const personas = []

while( personas.length < 1 ){

    //let nombre = prompt('Ingresa tu nombre')
    //let direccion = prompt('Ingresa tu direccion')
    //let telefono = prompt('Ingresa tu telefono')
    //let edad = prompt('Ingresa tu edad')

    let nombre = 'javier osvaldo'

    console.log(nombre.replace(' ', ''))

    console.log(nombre)

    if( nombre !== '' && direccion !== '' && telefono !== '' && !isNaN(telefono) && edad !== '' && !isNaN(edad) ){
        personas.push( new Persona(nombre, direccion, telefono, edad) )
    }


}