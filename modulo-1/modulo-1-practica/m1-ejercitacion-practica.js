
/**
 * Ejercicio 1: Mostrar números por consola
 * Solicitar al usuario un número y mostrar en la consola todos los números desde 1 hasta el número ingresado.


let numero = parseInt(prompt("Ingrese un número entero postivo"));

for (let i = 1; i <= numero; i++) {
    console.log(i)
}
*/
/**
 * Ejercicio 2 FizzBuzz
 * Solicitar al usuario un número y mostrar por consola los números del 1 al número ingresado pero:
 *  -Si el número es divisible por 3, imprimir "Fizz" en lugar del número.
 *  -Si el número es divisible por 5, imprimir "Buzz" en lugar del número.
 *  -Si el número es divisible tanto por 3 como por 5, imprimir "FizzBuzz" en lugar del número.
 *  -Si no es divisible por 3 o por 5, mostrar el número.
 


let numeroFizzBuzz = parseInt(prompt("Ingrese un número entero positivo."));

for(let i = 1; i<= numeroFizzBuzz; i++){

    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");

    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
};

*/

/**
 * Ejercicio 3: pirámide
 * Imprimir una pirámide simple en la consola. El programa debe solicitar al usuario el número de filas de la pirámide y luego mostrarla en la consola utilizando asteriscos. Cada fila debe tener un asterisco más que la anterior. Por ejemplo, si el usuario ingresa 5, la pirámide se verá asi:
 * | *
 * | * *
 * | * * *
 * | * * * *
 * | * * * * *
 * | * * * * * *
 * | * * * * * * *
 * | * * * * * * * *
 * | * * * * * * * * *


let filas = parseInt(prompt("Ingrese un número entero positivo."));

for(let i = 1; i <= filas; i++){
    let asteriscos = "";
    for(let x = 1; x <= i; x++){
        asteriscos = asteriscos.concat("* ");
    }
    console.log(asteriscos);
}

*/

/**
 * Ejercicio 4: Acceder a datos anidados.
 * Simularemos una llamada a una API que nos proporciana información de productos.
 * A) Mostrar en consola el material del producto "campera".
 * B) Mostrar en consola los talles disponibles del producto "remera".
 * C) El usuario ingresará un nombre de producto, si el producto existe, mostraremos el precio del mismo.




let response = {
    status: "success",
    data: {
        productos: [
            {
                id: 1,
                nombre: "remera",
                precio: 20,
                colores: ["rojo", "azul", "verde"],
                tallas: {
                    disponible: ["S", "M", "L"],
                    agotado: ["XL"],
                },
                detalles: {
                    material: "algodón",
                    peso: "200g",
                },
            },
            {
                id: 2,
                nombre: "campera",
                precio: 35,
                colores: ["negro", "gris"],
                tallas: {
                    disponible: ["M", "L"],
                    agotado: ["S", "XL"],
                },
                detalles: {
                    material: "denim",
                    peso: "400g",
                },
            },
        ],
        total: 2,
    },
};

console.log(response.data.productos[1].detalles.material);

console.log(response.data.productos[0].detalles);

let nombre_producto = prompt("Ingrese nombre del producto");

response.data.productos.forEach((element)=>{
    if(element.nombre === nombre_producto){
        console.log(element.precio)
    };
});

 */

/**
 * Ejercicio 5: función para verificar si un número es primo 
 * El objetivo de este ejercicio es crear una función que reciba como argumento un número entero positivo y determine si es primo o no. La función debe retornar un valor booleano (true o false) dependiendo si el número es primo.
 * Un número primo es aquel tiene únicamente dos divisores positivos distintos: él mismo y el 1
 
let consulta_numero_primo = parseInt(prompt("Ingrese un número entero positivo para verificar si es primo"));

const verificarPrimo = (numero) => {
    
    let verificadorPrimo = true;

    for(let i = 2; i < numero; i++){
        
        if(numero % i === 0){
            verificadorPrimo = false;
        }
    }

    if(verificadorPrimo){
        console.log("Es número primo", verificadorPrimo) 
    }else{
        console.log("No es número primo", verificadorPrimo)
    }
}

verificarPrimo(consulta_numero_primo);

*/

/**
 * Ejercicio 6: Función para encontrar la palabra más larga en un array.
 * El objetivo de este ejercicio es crear una función que reciba como parámetro un array de strings y devuelva la palabra más larga presente en el array. La función debe retornar la palabra más larga como resultado.
 * 



let palabras = ["manzana", "banana", "kiwi", "naranja"];


const encontrarPalabraMasLarga = (array) => {
    let palabraMasLarga = "";
    let largo = 0;

    array.forEach((element) => {
        if(element.length > largo){
            palabraMasLarga = element;
            largo = element.length;
        }
    })

    return palabraMasLarga;
}

console.log(encontrarPalabraMasLarga(palabras));

 */