const API_KEY_WEATHER = "7811643fbf7e9082211e1353c932fab0";
const API_KEY_NEWS = "7e518e43ad5ebc4f8cee265da95d51b7";

export const endpoint_weather = (search) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY_WEATHER}`;
  return url;
};

export const endpoint_news = (search) => {
  let url = `https://api.mediastack.com/v1/news?access_key=${API_KEY_NEWS}&keywords=${search}`;
  return url;
};
