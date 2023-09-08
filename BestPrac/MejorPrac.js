let firstName, lastName, price, discount, fullPrice, cont = 0;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;
fullPrice = price - discount;

const myArray = [];
const myObject = {};

for (let i = 0; i < 5; i++) {
    cont += i + "<br>";
}

document.getElementById("demo").innerHTML = cont +
"<br>" + firstName + " " + lastName + " " + fullPrice;

const car = {type:"Fiat", model:"500", color:"white"};
//car = "Fiat";  

const carros = ["Saab", "Volvo", "BMW"];
//carros = 3;

let x1 = "";
let x2 = 0;
let x3 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};

document.getElementById("demo1").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";

let hola = "hola";
document.getElementById("demo2").innerHTML = hola + " " + typeof hola;
hola = 5;
document.getElementById("demo3").innerHTML = hola + " " + typeof hola;

let numeroCinco = 5;
//x = 5 + 7;    // x.valueOf() is 12, typeof x is a number
//x = 5 + "7";  // x.valueOf() is 57, typeof x is a string
//x = "5" + 7;  // x.valueOf() is 57, typeof x is a string
//x = 5 - 7;    // x.valueOf() is -2, typeof x is a number
//x = 5 - "7";  // x.valueOf() is -2, typeof x is a number
//x = "5" - 7;  // x.valueOf() is -2, typeof x is a number
//x = 5 - "x";  // x.valueOf() is NaN, typeof x is a number

document.getElementById("demo4").innerHTML = numeroCinco.valueOf() + " " + typeof numeroCinco;

document.getElementById("demo5").innerHTML = "Hello" - "Dolly";

let x;
//x = (0 == "");   // true
//x = (1 == "1");  // true
//x = (1 == true);   // true
//x = (0 === "");  // false
//x = (1 === "1");   // false
//x = (1 === true);  // false
document.getElementById("demo6").innerHTML = x;

function nombreBienOriginal(x, y) {
    if (y === undefined) {
      y = 0;
    }  
    return x * y;
  }
  document.getElementById("demo7").innerHTML = nombreBienOriginal(4);

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
  default:
     day = "unknown";
}
document.getElementById("demo8").innerHTML = "Today is " + day;

let nombre = "John";        // x is a string
let objNombre = new String("John");  // y is an object
let otroNombre = new String("John");
document.getElementById("demo9").innerHTML = (nombre === objNombre) +
"<br>" + (objNombre == otroNombre);