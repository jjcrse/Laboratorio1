//Ejercicio 1 

//^Inversión de un Arreglo: Dado el siguiente arreglo de números, devuélvelo en orden inverso usando Lodash.


//Esto lo utilize para revertir los numeros  que estan en el []


import _ from 'lodash';

const numeros = [1, 2, 3, 4, 5];
const R1 = _.reverse(numeros)

console.log (R1)

//Ejercicio 2
//^Elimina Valores Falsy: Dado un arreglo con valores mixtos, filtra los valores falsy (false, 0, "", null, undefined, NaN).



//Es como usar ese filter pero de una mejor manera eliminando los valores por asi decirlo negativos o invalidos

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
const R2 = _.compact(valores)

console.log (R2)

//Ejercicio 3
//^Unión de Arreglos: Dados dos arreglos, únelos sin duplicados.



//Los array son como los grupitos donde estan los numeros y La funcion const los une a ambos grupitos

const array1 = [1, 2, 3]; const array2 = [3, 4, 5];

const R3 = _.union(array1,array2)

console.log (R3)

//Ejercicio 4
//^Contar Frecuencia de Elementos: Dado un arreglo de palabras, devuelve un objeto con la cantidad de veces que aparece cada palabra


//No es todo lo que dice en el DOC de ahi solo es poner el valor de la constante y el te los cuenta y te da el resultado de cada uno

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const R4 = _.countBy(palabras);

console.log(R4);

//Ejercicio 5 
//^Encontrar la Diferencia: Dados dos arreglos, devuelve los elementos que están en el primero pero no en el segundo.



//La R5 utilliza ese diference para poner lo que tiene el array1 pero no el 2

const arr1 = [1, 2, 3, 4, 5];  
const arr2 = [3, 4, 5, 6, 7];

const R5 = _.difference(arr1,arr2)

console.log (R5)

//Ejercicio 6
//^Ordenar por Propiedad: Dado un arreglo de objetos con propiedades nombre y edad, ordénalos por edad de menor a mayor.



const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
    ];
    
const R6 = _.orderBy(personas) 

console.log (R6)

//Acuerdate que necesitas preguntarle al profe la pregunta 6 si la podrias cambiar o lo dejas asi tal y como esta

//Ejercicio 7
//^Obtener Valores Únicos: Dado un arreglo con valores repetidos, devuelve un nuevo arreglo con solo los valores únicos.


//Aqui necesitas un _.uniq para poner los valores unicos y quitar las duplas de estos

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const R7 = _.uniq(numerosRepetidos)

console.log (R7)

//Ejercicio 8
//^Dividir un Arreglo en Grupos: Dado un arreglo y un número n, divide el arreglo en grupos de tamaño n


//N es la constante osea que vamos a separar los grupos y cada uno con 3 letras de los "elementos"pa eso utilizamos chunk y no groupby (No la vas a embarrar otra vez)
const J = 3; 
const letricas = ["a", "b", "c", "d", "e", "f", "g", "h"];
const R8 = _.chunk (letricas,[J])
console.log (R8)

//Ejercicio 9 
//^Transformar un Objeto: Dado un objeto con propiedades nombre, apellido, edad, devuelve un nuevo objeto con las claves en mayúsculas.



//Ese valor entre parentesis es una clave para el objeto y la clave es el nombre de la clave en ese objeto
//Ese map keys cambia las clave para una funsion de transformacion 
//ese to upper case las cambia a mayuscula
const personas2 = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const R9 = _.mapKeys(personas2,(valor, clave) => clave.toUpperCase());
console.log (R9)

//Ejercicio 10
//^Aplanar un Arreglo Profundamente: Dado un arreglo anidado con múltiples niveles de profundidad, conviértelo en un arreglo plano.



//Lo fui como aplanando por "Capas" para que quede todo junto en un solo corchete osea el orden fue R10A,R10B,R10C osea le fui como quitando los parentesis o corchetes
const anidado = [1, [2, [3, [4, 5]]], 6];

const R10A = _.flatten(anidado)
const R10B = _.flatten(R10A)
const R10C = _.flatten(R10B)

console.log (R10C)

//Ejercicio 11
//^Encontrar la Intersección de Múltiples Arreglos: Dado varios arreglos, encuentra los elementos comunes entre todos ellos.



const lista1 = [1, 2, 3, 4, 5];
const lista2 = [3, 4, 5, 6, 7];
const lista3 = [5, 6, 7, 8, 9];

const R11 = _.intersection(lista1,lista2,lista3)


console.log (R11)

//Ejercicio 12
//^Agrupar por Propiedad Dinámica: Dado un arreglo de objetos y una clave, agrupa los objetos según el valor de esa clave.



const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];

const R12 = _.groupBy(estudiantes,clave)

console.log (R12)


