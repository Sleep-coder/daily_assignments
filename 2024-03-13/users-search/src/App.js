// App.js
import React, { useState } from "react";
import UserSearchForm from "./components/userSearch";
import UserDetails from "./components/userDetails";
import "./App.css";

const users = [
  {
    Name: "Aarush",
    Id: 1,
    Email: "aarush100@gmail.com",
    ContactNo: "1234567890",
    Age: 30,
  },
  {
    Name: "Shriya",
    Id: 2,
    Email: "shriya101@gmail.com",
    ContactNo: "9876543210",
    Age: 29,
  },
  {
    Name: "Shreyash",
    Id: 3,
    Email: "shreyash102@gmail.com",
    ContactNo: "4567891230",
    Age: 13,
  },
  {
    Name: "Aashri",
    Id: 4,
    Email: "aashri103@gmail.com",
    ContactNo: "4567891230",
    Age: 8,
  },
];

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = (searchId) => {
    const userId = parseInt(searchId);
    const foundUser = users.find((user) => user.Id === userId);
    setUser(foundUser || "notFound"); 
  };

  return (
    <div className="container">
      <h1>User Search</h1>
      <div className="form-container">
        <UserSearchForm onSearch={handleSearch} />
        {user !== null && user !== "notFound" ? (
          <UserDetails user={user} />
        ) : null}
        {user === "notFound" ? <p>User not found</p> : null}
      </div>
    </div>
  );
};

export default App;
