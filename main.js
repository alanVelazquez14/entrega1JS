// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function num (numero){
//     if (numero % 2 === 0){
//         console.log ("El numero ingresado es par")
//     } else{
//         console.log ("El numero ingresado es impar")
//     }
// }

// const numero = 100
// num (numero)







// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function numero (numero1, numero2){
//     if (numero1 > numero2){
//         console.log ("El",numero1, "es mayor")
//     }else if (numero1 < numero2){
//         console.log ("El",numero2,"es mayor")
//     } else{
//         console.log ("Son numeros iguales")
//     }
// }

// const num1 = prompt ("Ingrese un numero")
// const num2 = prompt ("Ingrese otro numero")
// numero (num1,num2)







// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiplo (num){
//     if (num % 5 === 0){
//         console.log ("El numero",num, "es multiplo de 5")
//     }
// }

// const numero = prompt ("Ingrese un numero")
// multiplo(numero)








// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function numero (num){
//     const orden = 0
//     for (let i=0; i <= num; i++){
//        console.log (i)
//     }
// }

// const num = 10
// numero (num)








// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function palabra(pal, num){
//     for (let i = 1; i <= num; i++){
//         console.log (pal)
//     }
// }

// const pal = "Alan"
// const num = 5
// palabra (pal, num)








// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function arreglo(num){
//     for (let i = 0; i<num.length; i++){
//         console.log (num [i])
//     }
// }

// let numero = [1,2,5,6,15,85,95]
// arreglo(numero)









// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


// function arreglo(num){
//     for (let i = 0; i<num.length; i++){
//         if (i == 4){
//             continue
//         }
//         console.log (num [i])
//     }
// }

// let numero = [1,2,3,4,5,6,7,8,9,10]
// arreglo(numero)








// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.


// function multi(array, num){
//     for (let i = 0; i<array.length; i++){
//         let resultado = array[i] * num
//         console.log (resultado)
//     }
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// let num = 2
// multi(array,num)