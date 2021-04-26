

//IMPORTACION DE MODULOS
// DECLARACION DE VARIABLES
// DECLARACION DE FUNCIONES

function validateString(messageString){                
    if(typeof messageString === "string"){
            return true;
        }           
        else{
        return false;
        }
}
//contar numero de caracteres String
function countString(textString){  
        if(validateString(textString)){
        let numberCharacters= textString.length;
        console.log("el numero de caracteres de la cadena de texto ", textString,  " es ",numberCharacters);
        }           
        else{
        console.error(" el tipo de dato enviado no es una cadena")
        }             
}
//extraer el numero de caracteres de una cadena 
function extractCharacters(textString,numberCharactersExtract){
        if(validateString(textString)){
            console.log("la extraccion de la cadena es" ,textString.substring(0,numberCharactersExtract));
        }           
        else{
        console.error(" el tipo de dato enviado no es una cadena")
        }  
   }
//array de textos separados
function textArray(textString){
        if(validateString(textString)){
            console.log("la extraccion de la cadena en array es" ,textString.split(" "));
        }           
        else{
        console.error(" el tipo de dato enviado no es una cadena")
        }  
   }

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
        console.error(" el tipo de dato enviado no es una cadena")
        }  
   }

   export const allExercisesOne ={
    countString,
    extractCharacters,
    textArray,
    textString
    }
// EJECUCION DEL CODIGO  