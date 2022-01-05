import axios from "axios";
import REACT_APP_API_KEY from "../APIKey";

const getArticles = () => {
  axios
    .get(`https://gnews.io/api/v4/search?q=gaming&max=3&token=${REACT_APP_API_KEY}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
}

export default getArticles;