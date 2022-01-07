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