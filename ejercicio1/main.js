//  Define e inicializa un array con 5 elementos string en una sola línea.
let array1 = ["rojo", "amarillo", "negro", "azul", "verde"];

// Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
// completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.
let array2 = [];

array2.push(1, 2, 3);
console.log(`Longitud array: ${array2}`);

array2.shift();
console.log(`Longitud array: ${array2}`);

array2.unshift(4, 5);
console.log(`Longitud array: ${array2}`);

// Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
// caso contrario. 

function trueOrFalse (value) {
    return typeof value === "boolean";
};

console.log(trueOrFalse(1));
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
console.log(trueOrFalse("true"));

// Escribe una función que devuelva la longitud de un string recibido por argumento.

function stringLength(item) {
    return item.length;
};

console.log(stringLength("El cielo está enladrillado"));

// Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
// directamente).

function changeToPar(num) {
    if (num % 2 === 0) {
        return num;
    } else {
        return num + 1;
    }
}

console.log(changeToPar(1));
console.log(changeToPar(10));
console.log(changeToPar(19));

// Crea una función de flecha que reciba 
// una cantidad de minutos y lo devuelva convertido en segundos.

const minToSeg = min => min * 60;

console.log(minToSeg(20));

// Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
// obviar los años bisiestos.

const ageToDay = (age => age * 360);

// Crea una función que reciba un array y devuelva su último elemento. 
// Prueba tu función con varios arrays
// de diferentes longitudes.

function lastElement(array) {
    return array[array.length -1];
};

console.log(lastElement(array1));

//Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. 
//Ejemplo: countLegs(5, 2, 8); // output: 50.

const countLegs = ((pollos, vacas, cerdos) => pollos * 2 + vacas * 4 + cerdos * 4);

console.log(countLegs(100, 50, 25));

// Apartado 10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo

function dataType(data1, data2) {
    if (typeof data1 === typeof data2) {
        return console.log("Son del mismo tipo");
    } else {
        return console.log("Los datos introducidos son de distinto tipo");
    }
}

dataType(1, 3);
dataType("Hola", "Mundo");
dataType(true, false);
dataType(true, 4);

// Apartado 11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
// palabra de la frase original. Investigar método existente de los strings para este fin.

function stringToArray(item) {
    let arraySplit = item.split(" ");
    return console.log(arraySplit);
};

stringToArray("Hola mundo, me llamo Miguel Ángel Borrás");

// Aparatdo 13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy)
//y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. 
//Crea una función que se llame parseDomain() que
// reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

function parseDomain(str) {
    let split = str.split(".");
    return {
        domain: split[0],
        tld: split[split.length -1]
    };
}

console.log(parseDomain("codespace.com")); 

// Apartado 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
//strictEquality("5", 5); // false
//strictEquality(5, 5); // true

function strictEquality(data3, data4) {
    if (typeof data3 == typeof data4 && data3 == data4) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

strictEquality("5", 5);
strictEquality(5, 5);

// Apartado 15. Crea una función que reciba dos strings y devuelva true si tienen 
//la misma longitud y false en caso contrario.

function lenghtString15(str1, str2) {
    if (str1.length == str2.length) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

lenghtString15("Hola Mundo", "Hola Pedro");
lenghtString15("hola", "hola mundo");

// Apartado 16. Crea una función que reciba un string y determine 
// si está vacío sin utilizar la propiedad length.

function emptyStr(str) {
    return str === "" || str === undefined;
}

console.log(emptyStr(""));
console.log(emptyStr("Hola"));

// Apartado 17. . Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
//• while
//• for
//• for of
//• forEach.

let e = 0;
while (e < array1.length) {
    console.log("While:", array1[e]);
    e++;
}

for (let i = 0; i < array1.length; i++) {
    console.log("For: ", array1[i]);
}

for (let i of array1) {
    console.log("For of: ", i);
}

array1.forEach(value => console.log("forEach: ", value));

// Aparatado 18.  Crea una función que reciba un string y un número N 
// y devuelva el string original repetido N veces

function strRepeat(str, n) {
    return str.repeat(n)
}

console.log(strRepeat("Hola Mundo, ", 10));

// Apartado 19. . Crea una función que recibe un objeto con dos campos, 
// votos positivos y votos negativos y que devuelva
// la cuenta final.

const elecciones = {
    votosPositivos: 30,
    votosNegativos: 20
}

const countVotes = object => object.votosPositivos - object.votosNegativos;

console.log(countVotes(elecciones));


// Aparatado 20. Crea una función que recibe un array de tipos de datos mezclados y 
// que devuelva otro array con el tipo
// de cada uno de los elementos.

const array20 = [1, "hola", true, [], undefined];

function arrayTypeOf(arr) {
    let arrayType = arr.map(value => typeof value);
    return console.log(arrayType);
}

arrayTypeOf(array20);

// Apartado 21. Función que dado un array de números con formato string devuelva un array con los números ya
// parseados.
let arr21 = ["5", "3", "69", "90"]

function stringToNumber(arr) {
    let arrNumber = arr.map(value => Number(value));
    return arrNumber;
}

console.log(stringToNumber(arr21));

 // Apartado 22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por 
 // argumento es mayor o igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

 const positivOrNegative = (num => num >= 0 ? 'Positive' : 'Negative');

 console.log(positivOrNegative(4));
 console.log(positivOrNegative(-3));

 // Apartado 23. Crea una función que dado un array cualquiera y un índice, 
// borre el elemento guardado en ese índice.
const borrarElemento = ((arr, index) => arr.splice(index, 1));

console.log(borrarElemento(arr21, 2));
console.log(arr21);

// Apartado 24. Filtrar numeros. Elimina los numeros que les indiques.

const array24 = [4, 65, 6, 4, 2, 10, 48];

const arrayToFilter = arr => {
    let arrFilter = arr.filter(value => value < 40);
    return arrFilter;
}

// console.log(arrayToFilter(arrayFilter));

const removeNumbers = ((array, numberToFilter) => {
    array.forEach((value, index) => {
        if (value === numberToFilter) {
            borrarElemento(array, index)
        };
    })
})

console.log(removeNumbers(array24, 65));
console.log(array24);

// Apartado 25.  Crea dos funciones que recibirán un objeto, la primera devolverá un array con 
// los nombres de todas sus propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.

const persona = {
    name: "Juan",
    peso: 90,
    altura: 1.78,
    rubio: false
};

function propertyObject(obj) {
    return Object.keys(obj);
};

function valuesObject(obj) {
    return Object.values(obj);
};

function entriesObject(obj) {
    return Object.entries(obj);
};

console.log(propertyObject(persona));
console.log(valuesObject(persona));
console.log(entriesObject(persona));


// Aparatdo 26. Crea una función que invierta un string

const string26 = "Hola esto es una prueba para este ejercicio";

const reverseString = (str => str.split(" ").reverse().join());
console.log(reverseString(string26));

// Aparatado 27 Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

const str27A = "HOLA";
const str27B = "hola";

const compareStr = ((str1, str2) => {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
});

console.log(compareStr(str27A, str27B));
console.log(compareStr(str27A, string26));

// Apartado 28. Crea una función que convierta en mayúscula sólo la primera letra 
// de cada palabra de un string dado. El
// apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.

function firstLetterUp(str) {
    const word = str.split(" ");
    
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substring(1);
    }

    return word.join(" ");
}
    
console.log(firstLetterUp(string26));

// Apartado 29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

const negate = (logical => !logical);
console.log(negate(true));
console.log(negate(false));
