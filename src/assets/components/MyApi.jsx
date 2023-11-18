import { useState, useEffect } from "react";
import axios from "axios";

const MyApi = () => {
  const apiKey = "Z2ze1Cui0ND3IJ7i2KRM9EIABlFLIgZz";
  const apiUrlTrending = "https://api.giphy.com/v1/gifs/trending";
  const apiUrlSearch =
    "api.giphy.com/v1/gifs/search?api_key=Z2ze1Cui0ND3IJ7i2KRM9EIABlFLIgZz";

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(`${apiUrlTrending}`, {
        params: {
          api_key: apiKey,
        },
      });
      console.log(results);
    };
    fetchData();
  }, []);

  return <></>;
};
export default MyApi;
