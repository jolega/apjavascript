//IMPORTACION DE MODULOS .. 
// DECLARACION DE VARIABLES
// DECLARACION DE FUNCIONES
// valida si es una cadena //arrown fuction nombre de la funcion o asignaciona la variable => condicional ? accion si es verdadera : accion si es falsa
const validateString = (messageString)  =>  (typeof messageString === "string") ? true : false;
/*
function validateString(messageString){                
    if(typeof messageString === "string"){
            return true;
        }           
        else{
        return false;
        }
}
*/
//contar numero de caracteres String
const countString = (textString) => (validateString(textString)) ?   console.log("el numero de caracteres de la cadena de texto ", textString.length) : console.warn(" el tipo de dato enviado no es una cadena");
/*
function countString(textString){  
        if(validateString(textString)){
        let numberCharacters= textString.length;
        console.log("el numero de caracteres de la cadena de texto ", textString,  " es ",numberCharacters);
        }           
        else{
        console.warn(" el tipo de dato enviado no es una cadena")
        }             
}
*/
//extraer el numero de caracteres de una cadena 
const  extractCharacters = (textString,numberCharactersExtract) => (validateString(textString)) ?  console.warn("la extraccion de la cadena es" ,textString.substring(0,numberCharactersExtract)) : console.warn(" el tipo de dato enviado no es una cadena");
/*
function extractCharacters(textString,numberCharactersExtract){
        if(validateString(textString)){
            console.warn("la extraccion de la cadena es" ,textString.substring(0,numberCharactersExtract));
        }           
        else{
        console.warn(" el tipo de dato enviado no es una cadena")
        }  
   }
*/
//array de textos separados
const textArray = (textString) =>  (validateString(textString))  ?  textString.split(" ") : console.warn(" el tipo de dato enviado no es una cadena")
/*
function textArray(textString){
        if(validateString(textString)){
            console.log("la extraccion de la cadena en array es" ,textString.split(" "));
            return textString.split(" ")
        }           
        else{
        console.warn(" el tipo de dato enviado no es una cadena")
        }  
   }
*/
 //repetir texto n veces
function textString(textString, numTimes){
        let newString="";
        if(validateString(textString)){                 
            for(let i=0; i< numTimes; i ++){
                newString += " "+ textString ;
            }
            console.log("la nueva cadena", newString);
        }           
        else{
        console.warn(" el tipo de dato enviado no es una cadena")
        }  
   }
   export const allExercisesOne ={
    countString,
    extractCharacters,
    textArray,
    textString,
    validateString
    }
// EJECUCION DEL CODIGO  