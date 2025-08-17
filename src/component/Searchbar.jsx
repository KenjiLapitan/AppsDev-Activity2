import React from "react";
import "../Style/SearchBar.css"; // import CSS file

function SearchBar({ Search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <h1 className="searchbar-title">Find Products</h1>

      <input
        className="searchbar-input"
        type="text"
        placeholder="🔍 Search..."
        value={Search}
        onChange={handleChange}
      />

      <p className="searchbar-footer">&copy; 2025 Apps Dev Act2. All rights reserved.</p>
    </div>
  );
}

export default SearchBar;
