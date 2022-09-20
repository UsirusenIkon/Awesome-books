/* eslint-disable max-classes-per-file */
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const submit = document.querySelector('.submit');
const bookList = document.querySelector('.bookList');

class StandardBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class StandardBooks {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const p = new StandardBook(title, author);
    this.books.push(p);
    return p;
  }

  get allBooks() {
    return this.books;
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }
}

const initialBook = new StandardBooks();
initialBook.addBook('title1', 'author1');
initialBook.addBook('title2', 'author2');
initialBook.addBook('title3', 'author3');

function getData() {
  const localdata = localStorage.getItem('localdata');
  const dataStored = JSON.parse(localdata);
  if (dataStored) {
    initialBook.books = dataStored;
  }
}

getData();

function updateLocalStorage() {
  const localdata = JSON.stringify(initialBook.books);
  localStorage.setItem('localdata', localdata);
}

function displayBook() {
  bookList.innerText = '';
  initialBook.allBooks.forEach((standBook) => {
    const title = document.createElement('h3');
    title.innerText = standBook.title;

    const author = document.createElement('h4');
    author.innerText = standBook.author;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removebtn';
    removeBtn.innerText = 'Remove';

    const horizontalLine = document.createElement('hr');

    bookList.append(title, author, removeBtn, horizontalLine);
  });
  const removebtn = Array.from(document.querySelectorAll('.removebtn'));
  removebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnIndex = removebtn.indexOf(btn);
      initialBook.removeBook(btnIndex);
      displayBook();
    });
  });
  updateLocalStorage();
}
displayBook();
submit.addEventListener('click', () => {
  const title1 = title.value;
  const author2 = author.value;
  initialBook.addBook(title1, author2);
  displayBook();
});