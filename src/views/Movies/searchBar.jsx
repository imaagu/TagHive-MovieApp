import React, { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  return (
    <div className="my-4 rounded-lg mx-4 px-2 py-2 bg-gray-300 flex gap-3 items-center justify-center">
      <input
        type="text"
        className="w-4/5  h-8 focus:outline-none hover:outline-none focus:border-none hover:border-none px-2 rounded-lg bg-gray-200 "
        value={query}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={` w-1/5 h-8 text-white bg-blue-300 rounded-lg hover:bg-blue-300`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
