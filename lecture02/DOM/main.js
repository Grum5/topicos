
// De los 10 div cambiarles el color a los impares

const idPermitidos = [1,3,5,7,9]
const containers = document.querySelectorAll('div')

containers[0].style.backgroundColor = 'green'
containers[1].style.backgroundColor = 'gray'
containers[2].style.backgroundColor = 'yellow'
containers[3].style.backgroundColor = 'orange'
containers[4].style.backgroundColor = 'rose'
containers[5].style.backgroundColor = 'purple'
containers[6].style.backgroundColor = 'black'
containers[7].style.backgroundColor = 'white'
containers[8].style.backgroundColor = 'blue'
containers[9].style.backgroundColor = 'red'

containers[0].style.height = '200px'
containers[1].style.height = '200px'
containers[2].style.height = '200px'
containers[3].style.height = '200px'
containers[4].style.height = '200px'
containers[5].style.height = '200px'
containers[6].style.height = '200px'
containers[7].style.height = '200px'
containers[8].style.height = '200px'
containers[9].style.height = '200px'

const containersImpar = containers.forEach( (item) => {
    if (item.id == idPermitidos){
        console.log('hola')
    }

}])


