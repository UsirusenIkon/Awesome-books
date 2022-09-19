const title = document.querySelector('.title');
const author = document.querySelector('.author');
const submit = document.querySelector('.submit');
let books = [
  {
    title: 'title1',
    author: 'author1',
  },
  {
    title: 'title2',
    author: 'author2',
  },
  {
    title: 'title3',
    author: 'author3',
  },
];

function getData() {
  const localdata = localStorage.getItem('localdata');
  const dataStored = JSON.parse(localdata);
  if (dataStored) {
    books = dataStored;
  }
}

getData();

const bookList = document.querySelector('.bookList');

function updateLocalStorage() {
  const localdata = JSON.stringify(books);
  localStorage.setItem('localdata', localdata);
}

function removeBooks() {
  const removebtn = Array.from(document.querySelectorAll('.removebtn'));
  removebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnIndex = removebtn.indexOf(btn);
      books.splice(btnIndex, 1);
      displayBook();
      updateLocalStorage();
    });
  });
}

function displayBook() {
  bookList.innerText = '';
  books.forEach((book) => {
    const title = document.createElement('h3');
    title.innerText = book.title;

    const author = document.createElement('h4');
    author.innerText = book.author;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removebtn';
    removeBtn.innerText = 'Remove';

    const horizontalLine = document.createElement('hr');

    bookList.append(title, author, removeBtn, horizontalLine);
  });
  removeBooks();
}
displayBook();

submit.addEventListener('click', () => {
  const title1 = title.value;
  const author2 = author.value;
  books.push({
    title: title1,
    author: author2,
  });
  displayBook();
  removeBooks();
  updateLocalStorage();
});
