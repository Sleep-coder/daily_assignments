// Function to update a book
function updateBook(bookId, bookName, bookAuthor) {
  const updatedName = prompt("Enter the updated book name:", bookName);
  const updatedAuthor = prompt("Enter the updated author:", bookAuthor);

  if (updatedName !== null && updatedAuthor !== null) {
    fetch(`/updateBook/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookName: updatedName,
        bookAuthor: updatedAuthor,
      }),
    })
      .then(() => {
        // Refresh the books table after updating
        displayBooks();
      })
      .catch((error) => console.error("Error updating book:", error));
  }
}

// Function to delete a book
function deleteBook(bookId) {
  const confirmation = confirm("Are you sure you want to delete this book?");

  if (confirmation) {
    fetch(`/deleteBook/${bookId}`, {
      method: "DELETE",
    })
      .then(() => {
        // Refresh the books table after deleting
        displayBooks();
      })
      .catch((error) => console.error("Error deleting book:", error));
  }
}

// Function to borrow or return a book
function borrowReturnBook(bookId, currentStatus, button) {
  const newStatus = currentStatus === "Available" ? "Borrowed" : "Available";

  fetch(`/borrowReturn/${bookId}/${newStatus}`, {
    method: "PUT",
  })
    .then(() => {
      // Update button text and color
      button.textContent = newStatus === "Available" ? "Borrow" : "Return";
      button.style.backgroundColor = newStatus === "Available" ? "" : "red";

      // Refresh the books table after updating status
      displayBooks();
    })
    .catch((error) => console.error("Error:", error));
}

// Function to display books
function displayBooks() {
  fetch("/getBooks")
    .then((response) => response.json())
    .then((books) => {
      const bookTableBody = document.getElementById("bookTableBody");

      // Clear previous entries
      bookTableBody.innerHTML = "";

      books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.bookId}</td>
          <td>${book.bookName}</td>
          <td>${book.bookAuthor}</td>
          <td>${book.status}</td>
          <td>
            <button onclick="borrowReturnBook(${book.bookId}, '${
          book.status
        }', this)">
              ${book.status === "Available" ? "Borrow" : "Return"}
            </button>
          </td>
          <td>
            <button onclick="updateBook(${book.bookId}, '${book.bookName}', '${
          book.bookAuthor
        }')">
              Update
            </button>
          </td>
          <td>
            <button onclick="deleteBook(${book.bookId})">
              Delete
            </button>
          </td>
        `;
        bookTableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching books:", error));
}

// Form submission listener
document.addEventListener("DOMContentLoaded", () => {
  const addBookForm = document.getElementById("addBookForm");

  addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(addBookForm));

    fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((response) => response.text())
      .then(() => {
        // Clear form fields after successful submission
        addBookForm.reset();
        // Refresh the books table
        displayBooks();
      })
      .catch((error) => console.error("Error adding book:", error));
  });

  // Display books on page load
  displayBooks();
});
