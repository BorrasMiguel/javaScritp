function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
};

let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La Nueva Mente Del Emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16),
    new Book(5, "Eloquent Javascript, Second Edition", "Marijn Haverbeke", 12321, 25),
    new Book(6, "Learning Javascript Desing Pattern", "Addy Osmani", 12319, 17),
    new Book(7, "Programming Javascript Applications", "Eric Elliots", 12319, 10),
    new Book(8, "Understanding ECMAScript 6", "Nicolas C. Zakas", 12319, 7),
    new Book(9, "You dont Know JS", "Kyle Simpson", 12310, 9),
    new Book(10, "Git Pocket Guide", "Richard E. Silvermann", 12319, 29),
    new Book(11, "Designing Evolvable Web APIs with ASP.NET", "Glenn Block, et al", 12319, 19),
]

let displayedBooks = [...books];

//Selectores
const tBody = document.getElementById("tbody");
const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputSales = document.getElementById("inputSales");
const inputPrice = document.getElementById("inputPrice");
const btnSave = document.getElementById("btnSave");
const findBook = document.getElementById("findBook");
const priceHeader = document.getElementById("priceHeader");
const tFoot = document.querySelector("tfoot");

// Funcion para refrescar la tabla
function fillList() {
    tBody.innerHTML = "";

    displayedBooks.forEach(book => {
        tBody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.ventas}</td>
            <td>${book.precio}</td>
            <td><button class="removeBtn btn btn-danger" id="${book.id}">Eliminar</button></td>
        </tr>
        `
    });

    updateTotalPrice();
}

//Funcion para sumar precios

function updateTotalPrice() {
    let totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.precio, 0);
    tFoot.textContent = `Precio total ${totalPrice}`;
}

// Borrar elementos de la tabla
tBody.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        fillList();
    }
})
        
fillList();

// Guardar nuevos elementos en la tabla

btnSave.addEventListener("click", () => {

    const newBook = new Book(
        books.length + 1,
        inputTitle.value,
        inputAuthor.value,
        inputSales.value,
        inputPrice.value
    ) 
    books.push(newBook);
    displayedBooks.push(newBook);
    fillList();

    inputTitle.value = "";
    inputAuthor.value = "";
    inputSales.value = "";
    inputPrice.value = "";
})

// Busqueda de libros
findBook.addEventListener("input", (e) => {
    displayedBooks = books.filter(book => {
        const upperTitle = book.titulo.toUpperCase();
        const upperInputValue = e.target.value.toUpperCase();

        return upperTitle.includes(upperInputValue);
    });

    fillList();
})

// Ordenar precios
const sortPricesDesc = books.sort((bookA, bookB) => bookA.precio - bookB.precio);
const sortPricesAsc = books.sort((bookA, bookB) => bookB.precio - bookA.precio);
let ascendingOrder = true;

priceHeader.addEventListener("click", () => {
    ascendingOrder = !ascendingOrder;

    priceHeader.innerHTML = ascendingOrder ? "Price &darr;"  : "Price &uarr;"

    books.sort((bookA, bookB) => {
        if (ascendingOrder) {
            return bookA.precio - bookB.precio;
        } else {
            return bookB.precio - bookA.precio;
        }
    })

    fillList();
    
})



