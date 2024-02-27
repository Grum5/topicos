/*
    Usando el script anterior agrega la funcionalidad de
    que los colores no se repitan.
    **Tu estructura deberá contar con 20 colores
    diferentes.

    Javier Osvaldo Perez Bretado - 22760591

*/

// Se selecciona el body
const body = document.querySelector('body')

// Arreglo con los colores disponibles (20 colores)
const availableColors = [
    'red', 'blue', 'green', 
    'yellow', 'black', 'white', 
    'orange', 'purple', 'pink', 
    'brown', 'cyan', 'magenta', 
    'lime', 'indigo', 'violet', 
    'teal', 'navy', 'maroon', 
    'olive', 'silver' ]

// Se declara un arreglo temporal para no modificar el original
const tempColors = availableColors

for (let _ = 0; _ < 10; i++){

    // Se crea un indice aleatorio del 0 al 19
    let index = Math.floor(Math.floor(Math.random() * 20))

    // Se crea el div
    const div = document.createElement('div')
    
    // Se le asignan las propiedades
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.margin = '10px'

    // Se le asigna un color aleatorio
    div.style.backgroundColor = tempColors[index]

    // Se elimina el color del arreglo temporal
    tempColors.splice(index, 1)

    // Se agrega el div al body
    body.appendChild(div)

}
