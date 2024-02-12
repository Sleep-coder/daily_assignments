let libArray = [];

function scrolldiv() {
  var e = document.getElementById("addBookForm");
  e.scrollIntoView(); // Makes the element
}

function scrolldiv2() {
  var e = document.getElementById("section_2");
  e.scrollIntoView();
}

function srcolldiv3() {
  var e = document.getElementById("section_3");
  e.scrollIntoView(); // Default isstrue
}

// Function to get books from localStorage on page load
function getBooksFromStorage() {
  const storedBooks = localStorage.getItem("libraryBooks");
  if (storedBooks) {
    libArray = JSON.parse(storedBooks);
    updateTable();
  }
}

// Function to save books to localStorage
function saveBooksToStorage() {
  localStorage.setItem("libraryBooks", JSON.stringify(libArray));
}
const addBook = function () {
  const bookName = document.getElementById("bookName").value;
  const bookId = document.getElementById("bookId").value;
  const bookAuthor = document.getElementById("bookAuthor").value;

  if (!bookName || !bookId || !bookAuthor) {
    alert("Please fill in all fields before adding a book.");
    return;
  }
  if (libArray.some((book) => book.id === bookId)) {
    alert("Already exists");
  }

  let newBook = {
    id: bookId,
    name: bookName,
    author: bookAuthor,
    isBorrowed: false,
  };
  // Add the book to the library array
  libArray.push(newBook);

  // Save books to localStorage
  updateTable();
  saveBooksToStorage();

  // Call a function to update the table

  document.getElementById("addBookForm").reset();
};

const updateTable = function () {
  const tableBody = document.getElementById("bookTable");

  libArray.forEach((book) => {
    // Check if a row for the book already exists
    const existingRow = Array.from(tableBody.rows).find(
      (row) => row.cells[0].textContent === book.id
    );

    if (existingRow) {
      // If the row exists, update its cells
      existingRow.cells[1].textContent = book.name;
      existingRow.cells[2].textContent = book.author;

      // Update button style based on book's borrowed status
      const borrowButton = existingRow.cells[3].querySelector("button");
      if (book.isBorrowed) {
        borrowButton.style.backgroundColor = "red";
      } else {
        borrowButton.style.backgroundColor = ""; // Reset to default
      }
    } else {
      // If the row doesn't exist, create a new row
      const row = tableBody.insertRow();
      const cellId = row.insertCell(0);
      const cellName = row.insertCell(1);
      const cellAuthor = row.insertCell(2);
      const cellActions = row.insertCell(3);

      cellId.textContent = book.id;
      cellName.textContent = book.name;
      cellAuthor.textContent = book.author;

      const borrowButton = document.createElement("button");
      borrowButton.textContent = "Borrow";
      borrowButton.onclick = function () {
        borrowBook(book.id);
      };

      const returnButton = document.createElement("button");
      returnButton.textContent = "Return";
      returnButton.onclick = function () {
        returnBook(book.id);
      };

      // Set button style based on book's borrowed status
      if (book.isBorrowed) {
        borrowButton.style.backgroundColor = "red";
      }

      cellActions.appendChild(borrowButton);
      cellActions.appendChild(returnButton);
    }
  });
};
const borrowBook = function (id) {
  // Find the book in the library array
  const bookToBorrow = libArray.find((book) => book.id === id);

  // Check if the book is available for borrowing
  if (bookToBorrow && !bookToBorrow.isBorrowed) {
    // Update the book status to borrowed
    bookToBorrow.isBorrowed = true;
    alert(`Book with ID ${id} has been borrowed.`);
  } else {
    alert(`Book with ID ${id} is not available for borrowing.`);
  }
  updateTable();
  saveBooksToStorage();
  // Update the table after borrowing
};
const returnBook = function (id) {
  // Find the book in the library array
  const bookToReturn = libArray.find((book) => book.id === id);

  // Check if the book is borrowed and can be returned
  if (bookToReturn && bookToReturn.isBorrowed) {
    // Update the book status to returned
    bookToReturn.isBorrowed = false;
    alert(`Book with ID ${id} has been returned.`);
  } else {
    alert(`Book with ID ${id} is not available for return.`);
  }
  updateTable();
  saveBooksToStorage();
};

// Function to search for a book
const searchBooks = function () {
  // Get the search input value
  const searchInput = document.getElementById("searchInput").value;

  // Check if the search input is empty
  if (!searchInput) {
    alert("Please enter a book name to search.");
    return;
  }

  // Find matching books in the library array
  const matchingBooks = libArray.filter((book) => {
    return book.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  // Check if there are any matching books
  if (matchingBooks.length === 0) {
    alert("No matching books found.");
  } else {
    // Display matching books
    alert("Matching books:");
    matchingBooks.forEach((book) => {
      alert(
        `Title: ${book.name}, Author: ${book.author}, ID: ${book.id}, Borrowed: ${book.isBorrowed}`
      );
    });
  }
};
updateTable();
getBooksFromStorage();
