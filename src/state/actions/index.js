export const fetchArticles = (articles) => {
  return {
    type: "fetchArticles",
    payload: articles
  }
}