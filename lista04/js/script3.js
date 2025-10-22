alert("tabuada")
let numero = parseInt(prompt("digite um numero para saber o valor de sua tabuada :"))
let contadora = 1
do {
    console.log(numero + " X "+ contadora + " = " + numero * contadora)
    contadora++
} while (contadora < 11);