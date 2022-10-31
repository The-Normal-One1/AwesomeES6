// UI class: Handles UI Tasks

export default class UI {
    static displayBooks() {
      const books = Store.getBooks();

      books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
      const list = document.querySelector('#bookList');

      const row = document.createElement('tr');
      row.classList.add('row');

      const createTitle = document.createElement('th');
      const createAuthor = document.createElement('th');
      createTitle.innerHTML = book.title;
      createAuthor.innerHTML = book.author;
      const createButton = document.createElement('th');
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.type = 'submit';
      removeBtn.innerText = 'Remove';
      createButton.appendChild(removeBtn);

      row.appendChild(createTitle);
      row.appendChild(createAuthor);
      row.appendChild(createButton);
      list.appendChild(row);
    }

    static deleteBook(el) {
      if (el.classList.contains('remove-btn')) {
        el.parentElement.parentElement.remove();
      }
    }

    static clearfields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }
  }