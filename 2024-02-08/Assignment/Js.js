const libArray = [];
const addBook = function (id, title, author) {
  const newBook = {
    id,
    title,
    author,
    isBorrowed: false,
  };
  libArray.push(newBook);
};
const borrowBook = function (id) {
  const book = libArray.find((book) => book.id === id);

  if (book) {
    if (!book.isBorrowed) {
      book.isBorrowed = true;
      console.log(`Book with id ${id} (${book.title}) has been borrowed.`);
    } else {
      console.log(
        `Book with id ${id} (${book.title}) is not available. It's already borrowed.`
      );
    }
  } else {
    console.log(`Book with id ${id} not found.`);
  }
};

addBook(1, "Learn Js", "Johan");
addBook(2, "Learn HTML", "Mohan");
addBook(3, "Learn CSS", "Rohan");
console.log(JSON.stringify(libArray, null, 2));

borrowBook(1);
borrowBook(2);

borrowBook(2);

borrowBook(4);

console.log(JSON.stringify(libArray, null, 2));

const returnBook = function (id) {
  const book = libArray.find((book) => book.id === id);

  if (book) {
    if (book.isBorrowed) {
      book.isBorrowed = false;
      console.log(`Book with id ${id} (${book.title}) has been returned.`);
    } else {
      console.log(`Book with id ${id} (${book.title}) is not borrowed yet`);
    }
  } else {
    console.log(`Book with id ${id} not found.`);
  }
};
returnBook(2);
returnBook(2);
returnBook(4);
console.log(JSON.stringify(libArray, null, 2));

// Implement a function listAvailableBooks() that loops through the library array and logs the title and author of all books that are not currently borrowed.

const listAvailableBooks = function () {
  console.log("Available Books");
  for (const book of libArray) {
    if (!book.isBorrowed) {
      console.log(`Book title ${book.title} written by ${book.author}`);
    }
  }
};
listAvailableBooks();

// Implement a function searchBook(title) that searches for a book by its title. The function should loop through the library array and return the book object if found, or null if there's no book with the given title.

const searchBook = function (title) {
  const book = libArray.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  if (book) {
    console.log(book);
  } else {
    console.log(null);
  }
};
searchBook("learn js");
searchBook("learn dsa");
