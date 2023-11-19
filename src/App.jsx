import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./assets/components/Header";
import MyApi from "./assets/components/MyApi";
import Footer from "./assets/components/Footer";
import "animate.css";

function App() {
  const [trendData, setTrendData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div className="container">
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
