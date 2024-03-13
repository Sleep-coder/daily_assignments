import React, { useState } from "react";

const UserSearchForm = ({ onSearch }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form className="form-container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter User ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserSearchForm;
