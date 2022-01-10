import REACT_APP_API_KEY from "../../APIKey";

export const setArticles = (articles) => {
  return {
    type: "setArticles",
    payload: articles
  }
}

export const deleteArticle = (article) => {
  return {
    type: "deleteArticle",
    key: article 
  }
}

export const searchTerm = (input) => {
  return {
    type: "searchTerm",
    payload: input
  }
}

export const articleSelected = (article) => {
  return {
    type: "articleSelected",
    payload: article
  }
}

export const editArticle = (selectedKey, article) => {
  return {
    type: "editArticle",
    key: selectedKey,
    payload: article
  }
}

export const searchArticles = (searchInput) => async (dispatch) => {
  const response = await fetch(`https://gnews.io/api/v4/search?q=${searchInput}&max=9&lang=en&token=${REACT_APP_API_KEY}`);
  const responseData = await response.json()
  const responseArticles = responseData.articles.reduce((obj, item) => ({
    ...obj, [item["title"]]: item
  }), {});

  dispatch(searchTerm(""));
  dispatch(setArticles(responseArticles));
}

export const setTitle = (title) => {
  return {
    type: "setTitle",
    title: title
  }
}