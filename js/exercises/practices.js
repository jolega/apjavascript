//IMPORTACION DE MODULOS
// DECLARACION DE VARIABLES

function numberMath(){
               
    console.log(Math);
    console.log(Math.PI);
    console.log(Math.abs(-7,8)); // valor absoluto
    console.log(Math.ceil(7.2)); // redondeos
    console.log(Math.floor(7.8));
    console.log(Math.round(7.8));
    console.log(Math.sqrt(81));
    console.log(Math.pow(2,5)); // exponencial
    console.log(Math.sign(-0.3));  // validar si es positivo negativo o o
    console.log(Math.random());
    console.log(Math.random()*1000);
    console.log(Math.round(Math.random()*1000));
   }

  //objeto windows
    function eventsWindows(){

     alert("hola esto es una alerta");
     confirm("hola esto es una confirmacion");
     prompt("hola estos en un promot y permite ingresar datos");
    }
  
   
  //expresion regular
  function regularExpression() {

let cadena ="entrenando hola mundo ej javaScript lorem ";
let expReg = new RegExp("lorem", "i");  // banderas i ignora myusculas y minisculas, g rodas
let expReg2= /lorem/i;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
  }

  //funciones anonimas autoejecutable

  function functionAnonymous(){
   
    (function () {
        console.log("mi primera funcion anonima autojecutable");
    })();

    (function (d,w,c) {
        console.log("mi segunda funcion anonima autojecutable");
        console.log(d);
    })(document,window,console);

  }

  export const allPractices ={
    numberMath,
    eventsWindows,
    regularExpression,
    functionAnonymous
    }
// DECLARACION DE FUNCIONES