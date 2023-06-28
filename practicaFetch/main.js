// Heremos una peticion a la API
// Con el array que nos llegue iremos rellenando nuestra ul con li 
// con los primeros 20 elementos.

//Fetch
const url = "https://jsonplaceholder.typicode.com/comments";

// Fetch
// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => fillList(data))
//     .catch(error => console.log(error));

//Async

async function requestURL(url) {
    const response = await fetch(url);
    const data = await response.json();
    fillList(data);
}
requestURL(url);

//Selectores
const ul = document.querySelector("ul");

//Funciones
//Funcion para imprimir los elementos y generar li
// function printLi(data) {
//     for (let i = 0; i < 20; i++) {
//         const h2 = document.createElement("h2");
//         h2.textContent = data[i].id;
//         const newLi = document.createElement("li");
//         newLi.innerHTML += `
//             <li>${data[i].name}</li>
//             <li>${data[i].email}</li>
//             <li>${data[i].body}</li>
//         `
//         ul.appendChild(h2);
//         ul.appendChild(newLi);
//     }
// }


//Otra forma

function fillList(data) {
    data.slice(0, 20).forEach(element => {
        ul.innerHTML += `
            <h2>${element.id}</h2>
            <li>${element.name}</li>
            <li>${element.email}</li>
            <li>${element.body}</li>
        `
    });
}


fillList();


