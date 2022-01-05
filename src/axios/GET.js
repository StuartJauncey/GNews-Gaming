import axios from "axios";

const getArticles = () => {
  axios
    .get("https://gnews.io/api/v4/search?q=gaming&max=3&token=APITOKEN")
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
}

export default getArticles;