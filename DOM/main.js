//--------------------------------DOM (Documento Model Object)
//Basic
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title = "Cheatsheet JavaScript (DOM)";
document.title += " (DOM)";

//Selector
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);


const parents = document.getElementsByClassName("parent");  //HTML Collections
const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1, parent2);


const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector(".grandparent div")

parent1.style.backgroundColor = "#eee";

const changeBackground = ((item, color) => item.style.backgroundColor = color);
changeBackground(children[0]);

changeBackground(parent2.children[1]);

//Properties
console.log(children[0].innerHTML);
console.log(children[0].textContent); //Ignora las etiquetas html

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red"); //toggle: Alterna la clase, si no esta la añade y si esta la elimina.


parent1.setAttribute("name", "nombre-del-parent-1"); //Propiedad que queremos cambiar, por el que lo queremos cambiar


//create / remove elements
let myDiv = document.createElement("div");
myDiv.id = "myDiv";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";
parent1.appendChild(myDiv);

let myDiv2 = myDiv;
parent2.appendChild(myDiv2); //Mismo nodo con dos nombres diferentes

myDiv2 = myDiv.cloneNode(); //Creamos un nuevo nodo al partir del original
parent2.appendChild(myDiv2);
myDiv2.textContent = "child 5";

myDiv.remove();

let myDiv3 = myDiv.cloneNode(true);  //Con true realiza una copia profunda del nodo, por eso aparece tambien el texto
parent2.before(myDiv3);

parent2.after(myDiv.cloneNode());

// Crear una funcion que devuelva un nodo nuevo y reciba etiqueta e ID

function createNode(label, id) {
    let newNode = document.createElement(label);
    newNode.id = id;
    return newNode;
}

let newDiv = createNode("div", "identificador1");
let newTable = createNode("table", "identificador2");

parent2.appendChild(newDiv);
parent2.appendChild(newTable);


let link = createNode("a", "mainLink");
link.textContent = "texto del enlace";
link.href = "https://www.google.com";

grandParent.appendChild(link);

console.clear();
//--------------------------------------------Events

const buttonColor = document.getElementsByTagName("button")[0];  //Etiqueta html

buttonColor.addEventListener("click", e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.tagName);
    

    if (e.ctrlKey) {
        document.body.classList.toggle("bg-red");
    }
    console.log(`X: ${e.clientX} | Y: ${e.clientY}`);
    console.log(`Alt: ${e.altKey}. Shift: ${e.shiftKey}, Ctrl: ${e.ctrlKey}`);
});


const changeTittle = () => {
    document.querySelectorAll("h1")[1].textContent = emailInput.value;
}

const emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListenner);  //Se usa para los formularios
emailInput.addEventListener("blur", changeTittle);

function inputListenner (e) {
    console.log(`Tipo de evento: `, e.type);
    // if (e.type === "focus") {
    //     e.target.classList.add("input");
    // } else if (e.type ==="blur") {
    //     e.target.classList.remove("input");
    // }
}


console.log(emailInput.value);
const container = document.getElementsByClassName("container")[0];
container.addEventListener("mouseover", inputListenner);
container.addEventListener("mouseout", inputListenner)

emailInput.addEventListener("keydown", inputListenner);
emailInput.addEventListener("keyup", inputListenner);

const coords = (e) => {
    document.querySelectorAll("h1")[2].textContent = `X: ${e.clientX} || Y: ${e.clientY}`;
    console.log(e.value);
}   

document.body.addEventListener("mousemove", coords);







































/*for (let familyMember of family) {
    console.log(familyMember);
} Para iterar objetos que no son arrays for of te lo permite*/ 

