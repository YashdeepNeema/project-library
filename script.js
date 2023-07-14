const myLibrary = [];

// constructor function for book
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const book1 = new Book('gita', 'krishna', 800, true)
const book2 = new Book('deepwork', 'cal newport', 280, true)

// a function to push new book object to the array myLibrary
function addBookToLibrary(book){
    myLibrary.push(book)
}

addBookToLibrary(book1);
addBookToLibrary(book2);


//--------------------------------------------------------------------------------------------------------
function openPopup(){
    document.getElementById("popup-container").style.display = 'flex';
}
function closePopup(){
    document.getElementById("popup-container").style.display = "none";
}

closePopup();

// to open popup by clicking add new book button
const addBtn = document.querySelector(".addButton");
addBtn.addEventListener('click', () =>{
    openPopup()
})

// to handle form submission i.e. what happens after add button on popup is clicked.
function handleSubmit(event){
    // to prevent data to be sent to the server
    event.preventDefault();

    // to collect form data
    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const pages = document.getElementById("pages-input").value;
    const isRead = document.getElementById("isRead").value;

    // to instantiate a new book:
    const book = new Book(title, author, pages, isRead);

    // to add newly instantiated book to the array myLibrary:
    addBookToLibrary(book)

    //document.querySelector(".cards").innerHTML += `<div class="card">${book.title}</div>`
    const cards = document.querySelector(".cards");
    myLibrary.forEach((elem) => {
        if(myLibrary.indexOf(elem)===(myLibrary.length-1)){
            cards.innerHTML += `<div class="card" id="card-${myLibrary.indexOf(elem)}">${elem.title}</div>`
        }
    })


    // to close the popup after submittion and to clear the from:
    closePopup();
    document.querySelector(".addPopup-form").reset();
}

// to attach event listener to add button of popup window:
document.querySelector(".addPopup-form").addEventListener('submit', handleSubmit)
//---------------------------------------------------------------------------------------------------------

const cards = document.querySelector(".cards");
myLibrary.forEach((elem) => {
    cards.innerHTML += `<div class="card" id="card-${myLibrary.indexOf(elem)}">${elem.title}</div>`
})