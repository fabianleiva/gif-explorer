import { useEffect } from "react";
import axios from "axios";

const MyApi = ({
  trendData,
  setTrendData,
  searchData,
  setSearchData,
  input
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
        setSearchData(response.data.data);
        if (response.data.data.length <= 0) {
          alert("No hay resultados!")
        }
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
      </div>
    </>
  );
};
export default MyApi;
