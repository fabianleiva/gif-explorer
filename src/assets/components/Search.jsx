import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ setInput, setError }) => {
  const [inputValue, setInputValue] = useState("");

  const getInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const setInputState = (e) => {
    setError(false);
    e.preventDefault();
    setInput(inputValue);
  };

  return (
    <div className="searchBar">
      <form className="form" onSubmit={setInputState}>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Buscar . . ."
          className="form-control mb-4"
          onChange={getInput}
          value={inputValue}
        />
        <button type="submit" className="btn btn-primary">
        <IoSearch size="1.5rem" />
        </button>
      </form>
    </div>
  );
};
export default Search;
