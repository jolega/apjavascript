
import {PI} from "./constant.js"  //./ indica la carpeta donde estoy y sube con .
import {arithmetic} from "./arithmetic.js" // impotar las funciones aritmeticas
import {ready, menu} from "./exercises/menu.js"

console.log("Archivo modulo.js");
console.log(PI);
console.log(arithmetic.sumar(2,4))
menu(ready);