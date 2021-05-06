import {allExercisesOne} from "./exercisesOne.js" // impotar ejercicio one

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".}
const investString = (textString) => (allExercisesOne.validateString(textString)) ? console.log(`el texto invetido de ${textString} es`, textString.split('').reverse().join('')): console.warn(" el tipo de dato enviado no es una cadena")
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const  countWordsString = (textString, words) => {
    let count=0
    if((allExercisesOne.validateString(textString)) && (allExercisesOne.validateString(words)) ){    
        textString= allExercisesOne.textArray(textString);     
        textString.forEach(element => { if(element === words){ count++;}});
        console.log(`el numero de veces que el texto ${words} esta es ${count} veces `);   
    }           
    else{ console.warn(" el tipo de dato enviado no es una cadena favor revisar los parametros")}  
} // otra opcion es indexof(textString,0);
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const  validateWordPalydrome = (textString) => {
    let wordOne="", wordTwo="";
    if(allExercisesOne.validateString(textString)){  
        textString=textString.toLowerCase();
        wordTwo=textString.split(" ").join(""); // separa por espacios y lo vuelve a unir
        wordOne=wordTwo;
        wordTwo=wordTwo.split('').reverse().join(''); 
        if(wordOne === wordTwo) { console.log(`la palabra o frase  ${textString} sin espacio es ${wordOne} es palíndromo y reversa es igual ${wordTwo} `);  }
        else {console.log(`la palabra  ${textString} sin espacio es ${wordOne} NO es palíndromo  es diferente ${wordTwo} `); }
    }           
    else{console.warn(" el tipo de dato enviado no es una cadena favor revisar los parametros")}  
} // otra solucion es invertirla y comparalo en un if
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const  removeContentString = (textString, parameters) => { 
    if(allExercisesOne.validateString(textString) && allExercisesOne.validateString(parameters)){ 
        console.log(`buscar en la frase ${textString} la palabra ${parameters} y eliminarla`)
        let count = [];;
        let flag=0;
        textString=textString.split('');
        parameters=parameters.split('');
        for (let i=0; i < textString.length; i++)
            { 
                if(textString[i]===parameters[0]){
                    flag=i;
                    count = [];
                    for (let j=0; j < parameters.length; j++)
                    { 
                        if(textString[i]===parameters[j]){    
                            count.push(i);
                        //    console.log("si encotro",textString[i],count);
                            i++;
                        }                 
                    } 
                    if(count.length ===  parameters.length){
                       // console.log("claro que si",count[0],)
                        removeIndexArray(textString,count[0],count.length)
                       // console.log(textString,count[0],)
                    }
                    i=flag;
                }
                count= [];
            };
            textString=textString.join("");
            console.log(textString)
    }           
    else{console.warn(" el tipo de dato enviado no es una cadena favor revisar los parametros")}  
}
//eliminar datos de una array
const  removeIndexArray = (array,coordinates,count) => { array.splice(coordinates,count)}
    export const allExercisesTwo ={
    investString,
    countWordsString,
    validateWordPalydrome,
    removeContentString
    }