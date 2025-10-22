alert("pares de 1 até 200")
let somatorio = 0
let contadora =1
do {
    if(contadora % 2 ==0){
 somatorio = somatorio + contadora
    }
  
    contadora++
} while (contadora < 201);
console.log("o valor final do somatorio dos numeros pares de 1 até 200 é:"+ somatorio)