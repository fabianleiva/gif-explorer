// IMPORT USEEFFECT AND AXIOS
import { useEffect } from "react";
import axios from "axios";

//CREATE COMPONENT WITH PROPS
const MyApi = ({
  trendData,
  setTrendData,
  searchData,
  setSearchData,
  input,
  error,
  setError,
}) => {
  //CREATE VARIABLES FOR APIKEY AND ENDPOINTS FOR TREN AND FOR SEARCH
  const apiKey = "Z2ze1Cui0ND3IJ7i2KRM9EIABlFLIgZz";
  const apiUrlTrending = "https://api.giphy.com/v1/gifs/trending";
  const apiUrlSearch = "https://api.giphy.com/v1/gifs/search";

  //FUNCTION TO GET DATA FROM API
  const getFetchData = async (input) => {
    try {
      //VALIDATION FOR INPUT VALUE (EMPTY)
      if (input === "") {
        const response = await axios(`${apiUrlTrending}`, {
          params: {
            api_key: apiKey,
          },
        });
        //SET STATE FOR TREND DATA (FOR INITIAL RESULTS RENDERING)
        setTrendData(response.data.data);
      }
      //VALIDATION FOR INPUT VALUE (EXIST)
      if (input !== "") {
        const response = await axios(`${apiUrlSearch}`, {
          params: {
            api_key: apiKey,
            q: input,
          },
        });
        //CREATE VARIABLE TO VALIDATE DATA AND SET ERROR
        const sortResponse = response.data.data;
        sortResponse.length <= 0 ? setError(true) : setError(false);
        //SORT DATA
        sortResponse.sort(function (a, b) {
          return a.title.localeCompare(b.title);
        });
        //SET STATE FOR SEARCHED DATA (FOR FILTERED RESULTS RENDERING)
        setSearchData(sortResponse);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //USEEFFECT TO RENDER INITIAL RESULTS, AND RENDER FILTERED RESULT WHEN INPUT CHANGE
  useEffect(() => {
    getFetchData(input);
  }, [input]);

  return (
    <>
      <main className="content animate__animated animate__fadeInUp">
        <div className="galleryContainer">
          <div className="gallery">
            {/* INPUT VALIDATION TO CHECK WICH STATE USE FOR RENDER USING MAP */}
            {(input && input !== "" ? searchData : trendData).map((e) => {
              return (
                //CONTAINER CREATION FOR EACH GIF WITH HIS CORRESPONDING KEY
                <div key={e.id} className="gifContainer">
                  <a target="_blank" href={e.embed_url}>
                    <img src={e.images.fixed_height.url} alt={e.title} />
                  </a>
                  <span className="gifDescription">
                    {e.title !== "" ? e.title : <span>Untitled</span>}
                  </span>
                </div>
              );
            })}
            {/* VALIDATION FOR A BAD INPUT OR NO RESULT FROM API DATA */}
            {error ? (
              <div>
                <h3>
                  No hay resultados para <span>{input}</span>!
                </h3>
                <p>Vuelve a intentar.</p>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};
export default MyApi;
