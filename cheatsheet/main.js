//----------------------Tipos de datos
//Datos Primitivos
let str = String("Soy un string");
let str2 = "Soy otro string";

console.log(typeof str, typeof str2);

let num = Number(5);
let num2 = 4;

console.log(typeof num, typeof num2);

let bool = Boolean(true);
let bool2 = (false);

console.log(typeof bool, typeof bool2, typeof true, typeof "false");

//-----------------------Objetos

let array = Array(1, 2, 3);
let array2 = [1, 2, 3];

console.log(array , array2);
console.log(typeof array , typeof array2);

console.clear();
//------------------------Strings
str = "Hola Mundo";
console.log(str, str.length);
console.log(str.indexOf("futuro"));  //Sirve para buscar dentro de un string
console.log("La ultima ocurrencia de 'u' esta en el indice: ", str.lastIndexOf("u"));

console.log(str.substring(1, 3));  //Sacar parte de un string
console.log("Hola mundo,".concat(" adios mundo"));
console.log("Hola mundo" + " adiós mundo");

str = str + " adiós mundo";
console.log(str);

console.log(str.replace("Mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let day = 5;
console.log(`El dia de mi cumpleaños es ${day}`);  //String template

//Parsing -> Cambiar el tipo de dato a otro.
num2 = Number("ads"); //NaN No a Number
console.log(num2, typeof num2);

console.clear();

//------------------------Objects
let person = {
    name: "John",
    age: 30,
    blonde: false,
    jump() {
        console.log("Hey, estoy saltando");
    },

    presentarse() {
        console.log(`Hola soy ${this.name}, tengo ${this.age} años y ${this.blonde ? `soy rubio` : `soy moreno`}`);
    }
}

//Acceso por punto
console.log(person);
person.presentarse();

//Acceso por corchetes

let propertyName = "blonde";
console.log(person[propertyName]);

//Añadir campos al objeto después de crearlos
person.children = ["Marta", "Peter"];
console.log(person.children[0], person.children.length, person.children[1]);

person.jump();

//Copia de objetos en JS

let obj1 = {property: 5}
//let obj2 = obj1   No es una copia, es el mismo objeto pero con otro nombre.

let obj2 = {...obj1} //Copia superficial la cual haremos practicamento simpre.

//También sirve con arrays

let arr = [1, 2, 3];
let arr2 = [0, ...arr, 4];
console.log(arr2);

//-----------------------Constructor using functions
function Car(marca, color, weight, topSpeed) {
    this.marca = marca,
    this.color = color,
    this.weight = weight,
    this.topSpeed = topSpeed,
    this.getDescription = function() {
        return `This ${this.marca} ${this.weight} kilos ans can reach up to ${this.topSpeed} km/h`
    }
}

const car1 = new Car("mercedes", "red", 2000, 300);
const car2 = new Car("volvo", "grey", 1500, 280);
const car3 = new Car("volkswagen", "green", 1800, 300);

console.log(car1, car2, car3.getDescription());

console.clear();
//--------------------------Arrays
let selectedColors = ["red", "blue"]; //Arrays de Strings
console.log(selectedColors, selectedColors.lenght);

selectedColors[2] = "green"; //Si no existe lo crea
console.log(selectedColors.length);

selectedColors.push("violet", "white"); //Añade elementos al array (Al final)
console.log(selectedColors.length);

selectedColors.pop(); //Borra el último elemento del array
selectedColors.unshift("white"); //Añade el elemento al principo del array.
console.log(selectedColors);

selectedColors.shift() //Borra el primer elemento del array

selectedColors.sort() //Ordena el array como le indiquemos a través de una función
console.log(selectedColors);

console.log(selectedColors.indexOf("red"));
console.log(selectedColors.slice(1, 3));
console.log(selectedColors.splice(1, 3)); //Elimina los elementos del array


console.clear();


let niño = {
    nombre: "Pablo",
    altura: 1.80,
    genero: "masculino",
    amigos: [],
    perderAmigo() {
        this.amigos.pop()
    }
}

niño.amigos.push("Marta", "Andrea", "Ana");
niño.amigos.unshift("Juanma");
console.log(niño.amigos);

niño.perderAmigo();
console.log(niño.amigos);

console.clear();

//----------------------------- Condicionales

const randomNumber = 4;
const guessedNumber = "5";

if (typeof randomNumber === guessedNumber) {
    console.log("Son de la misma condición");
} else {
    console.log("Los números no son del mismo tipo");
}


if (randomNumber == guessedNumber) {
    console.log("Has acertado el número");
} else if (randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
}

// Operador ternario
let variable = 10 < 12 ? "es menor" : "es mayor";
console.log(variable);

//-------------------------------Switch

let option = 4;
switch (option) {
    case 1:
        console.log("Opción vale 1");
        break;
    case 2:
        console.log("Opción vale 2");
        break;
    case 3:
        console.log("Opción vale 3");
        break;
    default:
        console.log("otra opción");
}

console.clear();

//------------------------------Funciones

function saludar(nombre, apellido) {
    return `Hola ${nombre} ${apellido}. ¿Que tal estas?`;
};

console.log(saludar("iker", "jimenez"));

function cuadrado(a) {
    return console.log(a * a);
};

cuadrado(4);

//Funcion Anónima

let numberArray = [3, 4, 5, 10, 1, 6, 12, 9];

numberArray.sort(); //Ordena según ASCII
console.log(numberArray);

numberArray.sort((a, b) => a - b);
console.log(numberArray);

//ArrowFunctions

const perimetrerSquare = side => side*4;
console.log(perimetrerSquare(5));

//--------------------------------Bucles
//--------------------------------For (Cuando sabemos el número de repeticiones)
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
};

//Definir y rellenar un array con el indice i.
const arrayBucle = [];

for (let i = 0; i <= 10; i++) {
    arrayBucle.push(i);
    console.log(arrayBucle);
};

//--------------------------------While
let contador = 0;
while (contador <= 10) {
    console.log(`While ${contador}`);
    contador++;
};

/* for of y forEach son iguales, se utilizan cuando se quiere iterar un array
While cuando no sepamos la cantidad de interacciones
Cuando queramos iterar las propiedades de un objeto
For, cuando ninguno de los otros nos sirva */

//-------------------------ForEach (Únicamente para los arrays)

numberArray.forEach((value, index) => {
    console.log(`Indice: ${index}, valor: ${value}`);
});

let otherArray = [];

//Copiar Array a otro array
numberArray.forEach(value => otherArray.push(value));

console.log(otherArray);


//---------------------------For of (Cualquier cosa que se pueda iterar)
for (let item of numberArray) {
    console.log(item);
}

//----------------------------Break y Continue
//Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; //Salta a la siguiente iteracción
    }
    console.log("Using continue", i);
}

//Break
let i = 0;
let k;

mainloop: while (true) {
    console.log("Outher Loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner Loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainloop;
        } else if (k === 5) {
            break;
        }
    }
};







//-----------------------------Higher Order Functions
//Map Crea un array nuevo.

//Crear un nuevo Array a partir de otro y multiplicarlo por dos.
//Sin Map(), lo hariamos de la siguiente forma:

let arr1 = [1, 2, 3];
let arr21 = [];

arr1.forEach(value => arr21.push(value*2));
console.log(arr21);

//Con Map() y una función nombreda
arr1 = [1, 2, 3];

arr2 = arr1.map(num => num * 2);
console.log(arr2);

//Mini-ejercicio. A partir de un array de años calcular la edad de una persona

const birthtYears = [1990, 1980, 1970, 1975];

let calculateAge = birthtYears.map(year => 2023 - year);
console.log(calculateAge);

//Filter()
const prices = [150, 40, 35, 100, 237, 49];
const expensives = prices.filter(price => price >= 50);

console.log(expensives);



const cars = [
    {
        brand: "BMW",
        year: 2017,
        pleteNumber: "5565JSP",
        address: {
            street: "lo que sea",
            city: "wonderland"
        }
    },
    {
        brand: "Mercedes",
        year: 2001,
        pleteNumber: "7568JDS",
        address: {
            street: "Alcaraz",
            city: "Linares"
        }
    },
    {
        brand: "Seat",
        year: 1990,
        pleteNumber: "7564PSD",
        address: {
            street: "Andalucía",
            city: "Madrid"
        }
    }
];

console.log(cars.filter(car => car.address.city === "Linares"));

console.log(cars.map(car => car.brand));

cars.sort((car1, car2) => car1.year - car2.year);
console.log(cars);

//Reduce  Ejecuta una función reductora sobre cada elemento del array,
// devolviendo un único valor.

const arr12 = [10, 7, 3, 20, 14];

console.log(arr12.reduce((sum, currentNumber) => sum + currentNumber, 0));





