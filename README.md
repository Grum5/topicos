# Javier Osvaldo Perez Bretado - Topicos avanzados

Este repositorio contiene mi proyecto de 3 scripts

## Script1

Se elaboro un script para generar 10 contenedores de tamaño 100 y se les agrego un color aleatorio.

Donde se comenzo por hacer un querySelector para seleccionar el body
    
```javascript
const body = document.querySelector('body');
```

Se utilizo un ciclo for para generar los 10 contenedores, donde se les asigno su tamaño y tambien su color aleatorio

```javascript
// Se crea el div
const div = document.createElement('div')
    
// Se le asignan las propiedades
div.style.width = '100px'
div.style.height = '100px'
div.style.margin = '10px'
    
// Se le asigna un color aleatorio 
div.style.backgroundColor = availableColors[ Math.floor(Math.random() * 10) ]
```
Finalmente se incorpora el div al body

```javascript
// Se agrega el div al body
body.appendChild(div)
```


## Script2

Como continuacion del primer script, se elaboro un script que genere 10 contenedores de tamaño 100 y les agregue un color aleatorio, pero que esta vez los contenedores no deben tener el mismo color y ahora se tendrian 20 colores dentro del arreglo.

Para realizar esto se utilizo un arreglo temporal que almacene el arreglo original y se elimine el color que se le asigno al contenedor

```javascript
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
```

Se volvio a usar el mismo ciclo for, pero ahora se elimina el color que se le asigno al contenedor del arreglo temporal

```javascript
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
```

Y se agrega el div al body

```javascript
// Se agrega el div al body
body.appendChild(div)
```

## Script3

En este script se pide que se genere un total de 5 parrafos, donde cada parrafo tendra texto generado de manera aleatoria y tendra que tener entre 50 y 100 palabras, igualmente se mostrara al final del parrafo el numero de caracteres que tiene.

Se realizo una funcion que genera texto aleatorio con un numero de palabras definido entre 50 a 100

```javascript
// Funcion para generar texto aleatorio
function randomText(){

    // Se declara una variable texto para almacenar el texto
    let text = ''

    // Arreglo con palabras para armar el parrafo (79 palabras)
    const words = ["hola ", "llevamos ", "tanto ", "sin ", "vernos, ", "¿no? ","¿cómo ", "has ", "estado? ","espero ", "que ", "bien. ","hoy ", "es ", "un ", "día ", "muy ", "bonito. ","extraño ", "esos ", "dias ", "donde ", "nos ", "veiamos ", "seguido. ","como ", "esta ", "tu ", "familia? ","todo ", "en ", "excelentes ", "condiciones ","dios ", "mio ", "que ", "hermoso ", "outfit. ","me ", "encanta ", "tu ", "cabello. ","eres ", "una ", "persona ", "muy ", "especial. ","estoy ", "muy ", "emocionado ", "por ", "verte. ","me ", "he ", "endeudado ","no ", "tengo ", "dinero ","no ", "tengo ", "comida ","no ", "tengo ", "casa ","que ", "lastima ","que ", "triste ","que ", "emocionante ", "es ", "estar ", "aqui ","que ", "emocionante ", "es ", "estar ", "en ", "casa "
    ]

    // Arreglo temporal para almacenar las palabras y poder contarlas
    const tempText = []

    // Ciclo para generar el texto
    while( tempText.length < Math.floor(Math.random() * 50 + 50) ){

        // Se genera un indice aleatorio
        let index = Math.floor(Math.random() * 79)

        // Se concatena una palabra aleatoria a la variable text
        text += words[ index ]

        // Se agrega la palabra al arreglo temporal
        tempText.push(words[ index ])
    
    }

    // Se retorna el texto generado
    return text

}
```

Se termino por hacer un ciclo for para generar los 5 parrafos y se les agrego el texto generado y el numero de caracteres al final del parrafo, finalizando con agregar el parrafo al body

```javascript
// Ciclo para crear los 5 parrafos
for (let _ = 0; _ < 5; i++){

    // Se crea el parrafo
    const p = document.createElement('p')

    // Se le asigna el texto aleatorio
    p.textContent = randomText()

    p.textContent += ` (${p.textContent.length} caracteres)`

    // Se agrega el parrafo al body
    body.appendChild(p)

}
```