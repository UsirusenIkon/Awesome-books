export * from "./page_change.js";

const listBtn = document.querySelector('.listBtn');
const addBtn = document.querySelector('.addBtn');
const contactBtn = document.querySelector('.contactBtn');

const addBookSection = document.querySelector('.add-book');
const contactMeSection = document.querySelector('.contact-me');
const bookListSection = document.querySelector('.books');

addBtn.addEventListener('click', () => {
  addBookSection.classList.remove('displayNone');
  contactMeSection.classList.add('displayNone');
  bookListSection.classList.add('displayNone');
});

contactBtn.addEventListener('click', () => {
  addBookSection.classList.add('displayNone');
  contactMeSection.classList.remove('displayNone');
  bookListSection.classList.add('displayNone');
});

listBtn.addEventListener('click', () => {
  bookListSection.classList.remove('displayNone');
  contactMeSection.classList.add('displayNone');
  addBookSection.classList.add('displayNone');
});