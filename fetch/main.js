const URL = "https://jsonplaceholder.typicode.com/users";

const printNames = array => array.forEach(user => console.log(user.username));
const printCities = array => array.forEach(user => console.log(user.address.city));



// fetch(URL)
//     .then(response => {
//         if (!response.ok) {
//             throw Error(response.statusText);   
//         }
//         return response.json();
//     })
//     .then(data => {
//         //Aqui proceso los datos
//         printNames(data);
//         printCities(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })



// Async / await - Alternativa a then

console.log(1);;

async function requestURL(URL) {
    const response = await fetch(URL);
    const data = await response.json();
}
requestURL(URL);



//Peticion post con metodo HTTP en lugar de GET

const post_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(post_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))