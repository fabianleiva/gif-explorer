import { useState } from "react";
import { IoSearch } from "react-icons/io5";

//CREATE COMPONENT WITH PROPS
const Search = ({ setInput, setError }) => {
  //CREATE USESTATE FOR INPUTVALUE (LOCAL)
  const [inputValue, setInputValue] = useState("");

  //FUNCTION TO GET INPUT VALUE
  const getInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  //FUNCTION TO SETERROR AND SETINPUT(GLOBAL) FOR SEARCH WHEN FORM IS SUBMIT
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
