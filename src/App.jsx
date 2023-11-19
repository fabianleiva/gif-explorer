import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyApi from "./assets/components/MyApi";
import Search from "./Search";

function App() {
  const [trendData, setTrendData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div >
        <img className="logoContainer" src="../public/ge-logo.png" alt="logo" />
      </div>
      <Search setInput={setInput} setError={setError} />
      <MyApi
        trendData={trendData}
        setTrendData={setTrendData}
        searchData={searchData}
        setSearchData={setSearchData}
        input={input}
        error={error}
        setError={setError}
      />
    </>
  );
}

export default App;
