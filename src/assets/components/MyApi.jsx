import { useEffect } from "react";
import axios from "axios";

const MyApi = ({
  trendData,
  setTrendData,
  searchData,
  setSearchData,
  input,
  error,
  setError,
}) => {
  const apiKey = "Z2ze1Cui0ND3IJ7i2KRM9EIABlFLIgZz";
  const apiUrlTrending = "https://api.giphy.com/v1/gifs/trending";
  const apiUrlSearch = "https://api.giphy.com/v1/gifs/search";

  const getFetchData = async (input) => {
    try {
      if (input === "") {
        const response = await axios(`${apiUrlTrending}`, {
          params: {
            api_key: apiKey,
          },
        });
        setTrendData(response.data.data);
      }
      if (input !== "") {
        const response = await axios(`${apiUrlSearch}`, {
          params: {
            api_key: apiKey,
            q: input,
          },
        });
        const sortResponse = response.data.data;
        sortResponse.length <= 0 ? setError(true) : setError(false);
        sortResponse.sort(function (a, b) {
          return a.title.localeCompare(b.title);
        });
        setSearchData(sortResponse);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData(input);
  }, [input]);

  return (
    <>
      <div className="container">
        {(input && input !== "" ? searchData : trendData).map((e) => {
          return (
            <div key={e.id} className="gifContainer">
              <a target="_blank" href={e.embed_url}>
                <img src={e.images.fixed_height.url} alt={e.title} />
              </a>
              <span>{e.title}</span>
            </div>
          );
        })}
        {error ? (
          <div>
            <h3>
              No hay resultados para <span>{input}</span>!
            </h3>
            <p>Vuelve a intentar</p>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default MyApi;
