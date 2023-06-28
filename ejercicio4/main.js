function User(nombre, primerApellido, segundoApellido, email, edad, ciudad, numeroArticulos) {
    this.nombre = nombre,
    this.primerApellido = primerApellido,
    this.segundoApellido = segundoApellido, 
    this.email = email, 
    this.edad = edad,
    this.ciudad = ciudad,
    this.numeroArticulos = numeroArticulos
    this.emptyCart = function () {
        this.numeroArticulos = 0;
    }
    this.plusCart = function() {
        this.numeroArticulos++;
    };
} 

const users = [
    new User("Miguel", "Borras", "Castro", "miguel@gmail.com", "29 años", "Linares", 0),
    new User("Ana", "Casado", "Gomez", "ana@gmail.com", "29 años", "Linares", 0),
    new User("Rafa", "Morales", "Gonzalez", "rafa@gmail.com", "24 años", "Madrid", 0),
];


const select = document.querySelector("select");
const ul = document.querySelector("ul");
const plusBtn = document.getElementById("btnPlus");
const emptyBtn = document.getElementById("btnEmpty");




users.forEach((user) => {
    let selectedUser = document.createElement("option");
    selectedUser.textContent = user.nombre;
    select.appendChild(selectedUser);
})


function fillList(user) {
    ul.innerHTML = "";

    for (let propertyName in user) {
        const value = user[propertyName];
    
        if (typeof value !== "function") {
            let newLi = document.createElement("li");
            newLi.innerHTML += `<li><b>${propertyName}:</b> ${value}</li>`;
            newLi.classList.add("list-group-item")
            ul.appendChild(newLi); 
        }
    }
}

select.addEventListener("change", () => {
    const selectedUser = users.find(user => user.nombre === select.value);
    fillList(selectedUser);
})

fillList(users[0]);

function processProduct(e) {
    const selectedUser = users.find(user => user.nombre === select.value);

    if (e.target.id === "btnPlus") {
        selectedUser.plusCart()
    } else {
        selectedUser.emptyCart();
    }
    fillList(selectedUser);
}

plusBtn.addEventListener("click", processProduct);
emptyBtn.addEventListener("click", processProduct);

const arr1 = [1, 2, 3];
const arr2 = arr1.map(num => num * 2);
console.log(arr2);