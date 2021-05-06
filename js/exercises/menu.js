//IMPORTACION DE MODULOS .
import {allExercisesOne} from "./exercisesOne.js" // impotar ejercicio one
import {allExercisesTwo} from "./exercisesTwo.js" // impotar ejercicio two
import {allExercisesThree} from "./exercisesThree.js" // impotar ejercicio Three
import {allPractices} from "../practices/practices.js" // impotar ejercicio practices
// DECLARACION DE VARIABLES
export let ready=16;  //numero de items a mostrar
let hello="hola mundo";
let name="Johan Leonardo"
let name2="Johan Leonardo Leonardo LEONARDO leronard Leonardo"
let last_Name="Garcia Alonso";  
let greetings; // saludos
let numberCharacters;
let item=0;
let newString="";
// DECLARACION DE FUNCIONES
export function menu () {
do{
    switch(item){
        case 0:{
         console.log(hello);             //hola mundo
         break;   
        }     
        case 1:{
        greetings= `Hola mi nombre es ${name} ${last_Name} `  //Interpolcion de variables y presentacion                     
        console.log(greetings);
         break;   
        } 
        case 2:{
        allExercisesOne.countString(name);   // contador de String
        allExercisesOne.countString(1);
        allExercisesOne.countString();       // validador de datos
         break;   
        }                 
        case 3:{
        allExercisesOne.extractCharacters(name,5);   // hacer substring
        allExercisesOne.extractCharacters(1);      // validador de datos
         break;   
        }
        case 4:{
        allExercisesOne.textArray(name);   //array de textos separados
         break;   
        }
        case 5:{
        allExercisesOne.repeattextString(name,3);   // repetir texto n veces
         break;   
        }
        case 6:{
        allPractices.numberMath()  // funciones matematicas
         break;   
        }

        case 7:{
       // allPractices.eventsWindows()  // envetos en ventanas
         break;   
        }
        
        case 8:{
        allPractices.regularExpression  // expresiones regulares
         break;   
        }             
         case 9:{
        allPractices.functionAnonymous()  // funcion anonima
         break;   
        }
        case 10:{
          allExercisesTwo.investString(name) // funcion invertir
          break;   
       }
        case 11:{
          allExercisesTwo.countWordsString(name2,"Leonardo") // contar palabras de un texto
          break;   
        }
        case 12:{
          allExercisesTwo.validateWordPalydrome(name); //si una palabra o frase dada, es un palíndromo
          allExercisesTwo.validateWordPalydrome("anita lava la tina");
          allExercisesTwo.validateWordPalydrome("La ruta nos aporto otro paso natural");
          allExercisesTwo.validateWordPalydrome("Salas");
          break;   
       }
        case 13:{  //limine cierto patrón de caracteres de un texto dado
          allExercisesTwo.removeContentString("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
          allExercisesTwo.removeContentString(name ,"a");
          break;   
        }
        case 14:{  //generar numero aleatorio
         allExercisesThree.numberRandom();
          break;   
        }
        case 15:{  //validar si un numero es capicua
          allExercisesThree.numberCapicua(123);
          allExercisesThree.numberCapicua(2002);
          allExercisesThree.numberCapicua(2000);
          allExercisesThree.numberCapicua(212.212);
           break;   
         }
        case 16:{  //factorial de un numero
        allExercisesThree.numberfactory(5);
        allExercisesThree.numberfactory(7);
        allExercisesThree.numberfactory(0);
        allExercisesThree.numberfactory(-7);
           break;   
        }
    }
    item++;
  }while(item <= ready)
}
// EJECUCION DE CODIGO