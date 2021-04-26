import {allExercisesOne} from "./exercisesOne.js" // impotar ejercicio one
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".}
const investString = (textString = "") => (allExercisesOne.validateString(textString)) ? console.log(`el texto invetido de ${textString} es`, textString.split('').reverse().join('')): console.warn(" el tipo de dato enviado no es una cadena")

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
export const allExercisesTwo ={
    investString
    }