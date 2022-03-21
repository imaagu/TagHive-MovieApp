import axios from "axios";

//import { ApiUrl } from "./config.json";

const fetchingMovies = async (params) => {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/advancedsearch",
    params: params,
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": "75cadb5dcdmsh04f4552232cf02ap1653dcjsnff3f49f0fed5",
    },
  };

  const { data } = await axios.request(options);

  return data;
};

const fetchMovieByTitle = async (title) => {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/search",
    params: { title },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": "75cadb5dcdmsh04f4552232cf02ap1653dcjsnff3f49f0fed5",
    },
  };

  const { data } = await axios.request(options);

  return data;
};

export default {
  fetchingMovies,
  fetchMovieByTitle,
};
