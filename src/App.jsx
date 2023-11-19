import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyApi from "./assets/components/MyApi";
import Search from "./assets/components/Search";
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
        <header className="animate__animated animate__fadeInDown">
          <img className="logo" src="../public/ge-logo.png" alt="logo" />
          <Search setInput={setInput} setError={setError} />
        </header>
        <main className="content animate__animated animate__fadeInUp">
          <div className="galleryContainer">
            <MyApi
              trendData={trendData}
              setTrendData={setTrendData}
              searchData={searchData}
              setSearchData={setSearchData}
              input={input}
              error={error}
              setError={setError}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
