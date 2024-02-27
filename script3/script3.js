/*

    Elabora un script que sea capaz de generar 5
    párrafos.
    **Cada párrafo tendrá texto generado de manera
    aleatoria con una función que sea creada por ti. El
    tamaño del texto de cada párrafo deberá ser entre
    50 y 100 palabras. [Se deberá mostrar el tamaño de
    caracteres que tenga cada párrafo]

    Javier Osvaldo Perez Bretado - 22760591

*/

// Se selecciona el body
const body = document.querySelector('body')

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