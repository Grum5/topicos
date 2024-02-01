
let maxNumber = 40
let randomNumber = Math.floor(Math.random() * maxNumber)

console.log(randomNumber)

if (randomNumber == 21) {
	console.log("Tu numero es " + randomNumber + "\n Ganaste")
} 
else if (randomNumber > 21){
    console.log("Tu numero es " + randomNumber + "\nPor lo tanto es mayor a 21\nPerdiste")
} 
else {
    console.log("Tu numero es " + randomNumber)
}
