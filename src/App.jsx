import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";
import Header from "./assets/components/Header";
import MyApi from "./assets/components/MyApi";
import Footer from "./assets/components/Footer";

function App() {
  //CREATE USESTATES VARIABLES
  const [trendData, setTrendData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div className="container">
        {/* CREATE APP STRUCTURE */}
        <Header setInput={setInput} setError={setError} />
        <MyApi
          trendData={trendData}
          setTrendData={setTrendData}
          searchData={searchData}
          setSearchData={setSearchData}
          input={input}
          error={error}
          setError={setError}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
