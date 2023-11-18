import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyApi from "./assets/components/MyApi";
import Search from "./Search";

function App() {
  const [trendData, setTrendData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <h1>GIF's Explorer</h1>
      <Search setInput={setInput} />
      <MyApi
        trendData={trendData}
        setTrendData={setTrendData}
        searchData={searchData}
        setSearchData={setSearchData}
        input={input}
      />
    </>
  );
}

export default App;
