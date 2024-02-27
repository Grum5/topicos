/*
    Elabora un script que genere 10 contenedores de
    tamaño 100 y les agregue un color aleatorio.

    Javier Osvaldo Perez Bretado - 22760591

*/

// Se selecciona el body
const body = document.querySelector('body')

// Arreglo con los colores disponibles (10 colores)
const availableColors = [
    'red', 'blue', 'green', 'yellow', 'black', 
    'white', 'orange', 'purple', 'pink', 'brown']


// Ciclo para crear los 10 contenedores con colores aleatorios
for (let _ = 0; _ < 10; i++){

    // Se crea el div
    const div = document.createElement('div')
    
    // Se le asignan las propiedades
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.margin = '10px'
    
    // Se le asigna un color aleatorio
    div.style.backgroundColor = availableColors[ Math.floor(Math.random() * 10) ]

    // Se agrega el div al body
    body.appendChild(div)

}