import axios from "axios";
import REACT_APP_API_KEY from "../APIKey";

const getArticles = (search) => {
  return axios
    .get(`https://gnews.io/api/v4/search?q=${search}&max=5&lang=en&token=${REACT_APP_API_KEY}`)
    .then(response => {
      return response.data.articles.reduce((obj, item) => ({
        ...obj, [item["title"]]: item
      }), {});
    })
    .catch(error => {
      console.log(error);
    })
}

export default getArticles;