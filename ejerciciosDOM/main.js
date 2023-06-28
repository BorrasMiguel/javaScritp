// Apartado 1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos 
// p con un texto dentro.

const div1 = document.getElementsByClassName("ejercicio1");

const createElement = ((element, text) => {
    const node = document.createElement(element);
    node.textContent = text;
    return node;
});

let p1 = createElement("p1", "Hola Mundo");
div1[0].appendChild(p1);

let p2 = createElement("p", "Adios Mundo");
div1[0].appendChild(p2);


// 2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
const buttonColor = document.getElementById("ejercicio2");

buttonColor.addEventListener("click", () => {
    document.body.classList.toggle("bg-color");
})

// Ejercicio 3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. 
// Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

const imgLi = document.querySelectorAll("li");
const img = document.querySelector("img");

imgLi.forEach(li => {
    li.addEventListener("click", (e) => {
        img.src = e.target.textContent; 
        console.log(img.src);
    })
})

// Aparatado 4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const btn4 = document.getElementById("btn4");
const input = document.querySelector("input");
const p = document.querySelector("#p4");
const div4 = document.getElementsByClassName("container4");


btn4.addEventListener("click", () => {
    p.textContent = input.value;
    input.value = "";
})


input.addEventListener("input", () => {
    p.textContent = input.value;
})

// Aparatado 5. De forma similar al anterior, pero para un text area y 
// validará si lo introducido es mayor de 15 caracteres

const textArea = document.querySelectorAll("textarea");
const p5 = document.querySelector("#p5");
const buttonValidate = document.querySelector("#btn5");

const validate = () => {
    if (textArea[0].value.length > 15){
        p5.textContent = "El texto es mayor de 15 caracteres";
        p5.style.color = "green";
    } else {
        p5.textContent = "El texto es menor a 15";
        p5.style.color = "red";
    }

    textArea[0].value = "";
}

buttonValidate.addEventListener("click", validate);

// Apapartado 6 Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
// nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
// Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const input6 = document.getElementById("input6");
const btn6 = document.getElementById("btn6");

btn6.addEventListener("click", () => {
    if (input6.value %2 != 0){
        input6.classList.toggle("border-red"); 
    }
    input6.value = "";
})

// Aparatado 7 Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento 
// (“Elemento X”) usando un bucle for.

const ul7 = document.getElementById("ul7");

for (i = 0; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i;
    ul7.appendChild(li);
}

// Apartado 8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. 
// Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.  
// Añadir target = _blank
const a8 = document.getElementById("a8");
const btn8 = document.getElementById("btn8");

btn8.addEventListener("click", () => {
    a8.target = "_blank";
})

// Apartado 9. Añadir un párrafo y un select con 5 opciones de colores: 
// negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select, cambiar el color del párrafo.

const p9 = document.querySelector("#p9")
const select = document.querySelector("select");

select.addEventListener("change", () => {
    p9.style.color = select.selectedOptions[0].value;
})

// Aparatado 10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualizada el número
// de elementos que se han generado, los que son pares y los que son impares.

const ulImpar = document.getElementById("impar");
const ulpar = document.getElementById("par");
const btn10 = document.getElementById("btn10");


function aleatorio() {
    const numero = Math.floor(Math.random()*100);
    if (numero %2 == 0) {
        ulpar.innerHTML += `<li>${numero}</li>`;
    } else {
        ulImpar.innerHTML += `<li>${numero}</li>`;
    }
}

btn10.addEventListener("click", aleatorio)


// Aparatado 12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. 
// Al hacer click en el botón haremos “toggle” o 
// alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.
document.getElementById("btn12").addEventListener("click", (e) => {e.target.classList.toggle("border-red")})

// Aparatado 13. Extra
// El código siguiente, añade un eventListener a cada botón para que cuando se haga click en cada uno de
// ellos, le cambie el backgroundColor.
// Refactorizar el código para hacerlo con
// un único forEach.
// Nota:
// 1. Para transformar un HTMLCollection a
// un array, podemos hacer:
// Array.from(HTMLCollection);
// 2. Para acceder al elemento que
// “disparó” el evento, podemos
// usar evento.target.

const buttons13 = document.querySelectorAll(".btn13");

buttons13.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.classList.toggle("btn-red");
    })
})