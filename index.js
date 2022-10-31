// book.js
import Book from './modules/book.js';

// store.js
import Store from './modules/store.js';

// ui.js
import { UI } from './modules/UI.js';

// for navigation bar

// bookList.js
import bookList from './modules/bookList.js';

// addList.js
import addList from './modules/addList.js';

// contactList.js
import contactList from './modules/contactList.js';

// allSection.js
import allSection from './modules/allSection.js';

// inputSection.js
import inputSection from './modules/inputSection.js';

// contactSection.js
import contactSection from './modules/contactSection.js';

// linksAll.js
import linksAll from './modules/linksAll.js';

// linksAdd.js
import linksAdd from './modules/linksAdd.js';

// linksContact.js
import linksContact from './modules/linksContact.js';

import displayDate from './modules/time.js';

// event: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event: add books
document.querySelector('#enter').addEventListener('submit', (e) => {
// prevent defualt
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // validation
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    // instatiate book
    const book = new Book(title, author);
    // Add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // clear field
    UI.clearfields();
  }
});

// event: remove a books
document.querySelector('#bookList').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove books form store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

bookList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksContact.style.color = 'black';
});

addList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
  linksContact.style.color = 'black';
});

contactList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  linksContact.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});
displayDate();
setInterval(displayDate, 1000);