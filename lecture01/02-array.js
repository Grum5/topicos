const arr = [5,6,7]

console.log(arr)

// Ciclo for clasico
console.log('for clasico')

for(let i = 0; i<3; i++){
    console.log(arr[i])
}

// Ciclo for con in
console.log('for in')

for(let i in arr){
    console.log(arr[i])    
    // Muestra el numero del indice en el arreglo

}


// Ciclo for con of
console.log('for of')

for(let j of arr){
    console.log(j)
    // Muestra los elementos del arreglo usando el indice j
}

// Ciclo forEach
console.log('forEach')

arr.forEach( (element) => { console.log(element) } )

console.log('------------')

const newArr = arr.filter( (number) => number !== 6 )

const newArr2 = arr.filter( (number) => {
    return number !== 6
} )



newArr.forEach( (element) => { console.log(element) } )
newArr2.forEach( (element) => { console.log(element) } )


const newArr3 = arr.filter( (number) => {
    console.log('hola mundo desde un bloque de codigo')
    console.log(number)
    return number !== 6
} )