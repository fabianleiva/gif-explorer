import { useState } from "react";

const Search = ({ setInput }) => {
  const [inputValue, setInputValue] = useState("");

  const getInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const setInputState = (e) => {
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
          Buscar
        </button>
      </form>
    </div>
  );
};
export default Search;
