const url = "https://jsonplaceholder.typicode.com/posts";

//Variables
let pageSize = 2;
let pageNumber = 1;
let post = [];


//Selectores
const section = document.querySelector("section");
document.querySelectorAll(".nextBtn").forEach(btn => btn.addEventListener("click", changePage));
document.querySelectorAll(".preBtn").forEach(btn => btn.addEventListener("click", changePage));


//Funciones
function fillList() {
    section.innerHTML = "";

    const paginateArray = paginate(post, pageSize, pageNumber)
   
    paginateArray.forEach(element => {
        section.innerHTML += 
        `
            <h1>${element.title}</h1>
            <p>${element.body}</p>
        `
    });
};

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

function changePage(e) {
    
    if (e.target.className === "nextBtn" && pageNumber < post.length / pageSize) {
        pageNumber++;
    } else if (e.target.className === "preBtn" && pageNumber > 1) {
        pageNumber--;
    }
    fillList();
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        post = [...data]
        fillList();
});
    
// -------------------------------6.2 Login y paginacion desde el servidor

//Constantes

const userURL = "https://reqres.in/api/login"

//Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelectorAll("#loginBtn")[0].addEventListener("Click", login);


//Function 
async function login(e) {
    e.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    }

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    }

    const response = await fetch(userURL, config)

    const data = await response.json();
    console.log(data);

}


