import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const REACT_RAPID_API_KEY =
  "d6482ef0c6msh1dcde0e06061022p148c2ejsn5f47ee4e3b61";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": REACT_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);

  return data;
};
