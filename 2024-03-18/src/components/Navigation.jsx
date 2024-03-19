import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav>
      <ul>
        <li
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setCurrentPage("home")}>
          Home
        </li>
        <li
          className={currentPage === "users" ? "active" : ""}
          onClick={() => setCurrentPage("users")}>
          Users
        </li>
        <li
          className={currentPage === "posts" ? "active" : ""}
          onClick={() => setCurrentPage("posts")}>
          Posts
        </li>
        <li
          className={currentPage === "todos" ? "active" : ""}
          onClick={() => setCurrentPage("todos")}>
          Todos
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
