//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numberRandom  =() => {
    let number="";
    number=parseInt(Math.random() * (600 - 501) + 501);
    console.log(" el numero aleatorio es ",number)
}
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const numberCapicua  =(number) => {
    if (typeof number === "number") {
        let  numberReverse= (number+"").split('').reverse().join("");
        number=number.toString();
        return(number===numberReverse)
        ? console.log(`el numero ${number} es capicua ${numberReverse}`)
        : console.log(`el numero ${number}  no es capicua ${numberReverse}`)
    }
    else{
        console.log(" el dato ingresado no es un numero ", number);
    }
}
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const numberfactory  =(number) => {
    let factory=0;
    if ((typeof number === "number") && (number > 0 )) {
        factory=numberfactoryrecursion(number,1)
        console.log(`el factortial de  ${number}  es  ${factory}`);
    }
    else{
        console.log(" el dato ingresado no es un numero valido ", number);
    }
}
const numberfactoryrecursion  =(number,item) => {
    return(item===number)
    ?    number
    :    item*numberfactoryrecursion(number,++item)    
}
export const allExercisesThree ={
numberRandom,
numberCapicua, 
numberfactory
}