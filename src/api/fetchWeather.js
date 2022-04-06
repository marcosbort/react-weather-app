import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "a9dcde741bb22d90f767d5de4853633d";

const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_Key,
    },
  });

  return data;
};

export default fetchWeather;
