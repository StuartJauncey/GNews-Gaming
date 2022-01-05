export const fetchArticles = (articles) => {
  return {
    type: "fetchArticles",
    payload: articles
  }
}

export const deleteArticle = (article) => {
  return {
    type: "deleteArticle",
    key: article 
  }
}