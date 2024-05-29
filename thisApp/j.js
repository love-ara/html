// const addBook = document.getElementById("add-book");
//  console.log(addBook)
// const addbook = document.querySelector("#add-book");
// console.log(addbook)
// const add = document.querySelector("button");
// console.log(addBook.lastElementChild.textContent);
// console.log(add);
// console.log(add.textContent);


//console.log(addBook.parentNode);
//  console.log(addbook.previousElementSibling);
// console.log(addbook.previousSibling);

const bookList = document.querySelector("#book-list ul");
// console.log(bookList);
bookList.addEventListener("click", (event)=>{
    //console.log(event);
    let className = event.target.className;
    //    if(Object.is(className, "delete")){
    if(className === "delete"){
        let li = event.target.parentElement
        // li.parentElement.removeChild(li);
        bookList.removeChild(li);
    }
    //  console.log(className);
})


const  searchBook = document.forms["search-books"];

const listOfBooks = document.querySelectorAll("#book-list li .name");
// console.log(listOfBooks);
searchBook.addEventListener("keyup", function(event){
    let inputText = event.target.value.toLowerCase();

    listOfBooks.forEach((book) =>{
        let title = book.textContent.toLocaleLowerCase();
        let isIncludInputText = title.includes(inputText);

        let parentNode = book.parentNode;
        // console.log(parentNode);

        if(isIncludInputText){
            parentNode.style.display = "block";
        }else{
            parentNode.style.display = "none";
        }

    })
});

const addBook = document.forms["add-book"];
// console.log(addBook);

addBook.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addBook.querySelector("input").value.trim();
    // console.log(inputValue);
    if(inputValue){
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");

        firstSpan.className = 'name';
        secondSpan.classList = 'delete'


        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        bookList.appendChild(liTag);
        bookList.prepend(liTag);

        addBook.reset();
    }
})

// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);

// const title = document.getElementsByClassName("title");
// console.log(title);

// const tagName = document.getElementsByTagName("header");
// console.log(tagName);

// console.log(Array.isArray(Array.from(title)))

// const bookList = document.querySelector("#book-list")
// console.log(bookList);
// const bookList = document.querySelectorAll("#book-list ul li");
// bookList.forEach((book) => {
//     console.log(book);
// })

// const bookList = document.querySelectorAll("#book-list ul li");
//  bookList.forEach((book) => {
//        console.log(book.textContent);
// })

// const bookList = document.querySelectorAll("#book-list ul li");
// console.log(bookList[1].textContent)
// const bookList = document.querySelectorAll("#book-list ul li .name");
// console.log(bookList);
// bookList.forEach((book) => {
//     book.textContent += " (test)";
//console.log(book.textContent)
//})
//console.log(bookList[1].innerHTML)
//bookList.forEach((book) => {
//console.log(book.textContent);
//})



// for(const element of bookList){
//     console.log(element);
// }

// console.log(Array.isArray(bookList));
//console.log(bookList);



const bookList = document.querySelector("#task-list ul");

function getTasksFromStorage() {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
}
function saveTasksToStorage(tasks) {
    localStorage.setItem("taskList", JSON.stringify(tasks));
}
const tasks = getTasksFromStorage();

bookList.addEventListener("click", (event)=>{
    let className = event.target.className;
    if(className === "delete"){
        let li = event.target.parentElement
        bookList.removeChild(li);
    }
})


const  searchBook = document.forms["search-books"];

const listOfBooks = document.querySelectorAll("#book-list li .name");
searchBook.addEventListener("keyup", function(event){
    let inputText = event.target.value.toLowerCase();

    listOfBooks.forEach((book) =>{
        let title = book.textContent.toLocaleLowerCase();
        let isIncludeInputText = title.includes(inputText);

        let parentNode = book.parentNode;

        if(isIncludeInputText){
            parentNode.style.display = "block";
        }else{
            parentNode.style.display = "none";
        }

    })
});

const addBook = document.forms["add-book"];

addBook.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addBook.querySelector("input").value.trim();
    if(inputValue){
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");
        const thirdSpan = document.createElement('input')

        firstSpan.className = 'name';
        secondSpan.classList = 'delete'
        thirdSpan.type = 'checkbox'

        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);
        liTag.appendChild(thirdSpan);

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";
        thirdSpan.textContent = 'check';

        bookList.appendChild(liTag);

        addBook.reset();
    }
})











