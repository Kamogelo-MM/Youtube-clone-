import Axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const axios = require("axios");

const options = {
  url: BASE_URL,
  method: "GET",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
