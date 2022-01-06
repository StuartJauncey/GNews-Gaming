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

export const searchTerm = (input) => {
  return {
    type: "searchTerm",
    payload: input
  }
} 