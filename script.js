const data = [
  {
    id: 1,

    title: "Bok 1",

    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",

    readCount: 10,
  },

  {
    id: 2,

    title: "Bok 2",

    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",

    readCount: 300,
  },

  {
    id: 3,

    title: "Bok 3",

    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",

    readCount: 80,
  },

  {
    id: 4,

    title: "Bok 4",

    body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",

    readCount: 200,
  },

  {
    id: 5,

    title: "Bok 5",

    body: "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",

    readCount: 109,
  },
];

const search = document.querySelector(".search input");

let addButton = document.getElementById("add");

let updateButton = document.getElementById("updateButton");

let deleteButton = document.getElementById("deleteButton");

let resetButton = document.getElementById("reset")

resetButton.addEventListener("click", reset)

addButton.addEventListener("click", show);

function show() {
  let submitButton = document.getElementById("submit");
  let inputField = document.getElementById("inputFields");
  inputField.classList.toggle("hidden");
  submitButton.addEventListener("click", addFoo);
}

function addFoo() {
  let inputAddTitle = document.getElementById("addTitle").value;
  let inputAddBody = document.getElementById("addBody").value;
  let inputAddPage = document.getElementById("addPage").value;

  data.push({
    id: data.length + 1,
    title: inputAddTitle,
    body: inputAddBody,
    readCount: inputAddPage,
  });
  console.log(data);
  loadList();
}

function loadList(searchValue) {
  let bookData = data;
  console.log(searchValue);
  const books = document.querySelector(".books");
  books.innerHTML = "";
  if (searchValue !== undefined && searchValue.trim() !== "") {
    bookData = data.filter((book) => searchValue == book.title);
  }
  console.log(bookData);
  let i = 0;
  bookData.forEach((data) => {
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add(`${i}`);
    bookDisplay.id = "singleDisplay";
    bookDisplay.innerHTML = `
        <h3 id="bookName" class =bookName${i}> ${data.title} </h3>
        <p id="bookBody" class =bookBody${i}> ${data.body}</p>
        <p id="bookPage" class ="bookPage${i}">Pages: ${data.readCount}</p>
        <button id="updateButton" class =updateButton${i} onclick="update(${i})">Update</button>
        <button id="deleteButton" class =deleteButton${i} onclick="myDelete(${i})">Delete</button>`;
    books.appendChild(bookDisplay);
    i++;

    bookDisplay.addEventListener("click", function divCheck() {
      console.log(bookDisplay.className);
    });
  });
}

function CreateFilter() {
  const filterVlaue = document.getElementById("search").value;
  loadList(filterVlaue);
}

document.getElementById("searchButton").addEventListener("click", CreateFilter);

function myDelete(i) {
    console.log("jeg sletter", i)
    data.splice(i,i+1)
    loadList()
}

function update(i) {
    data[i].title = prompt("Enter Title", "Title")
    data[i].body = prompt("Enter Body", "Body")
    data[i].readCount = prompt("Enter Pages", "Pages")
    loadList()
}

function reset() {
   let value = document.getElementById("search").value = ""
   loadList(value)
}