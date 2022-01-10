const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case "setArticles":
      return action.payload;
    case "deleteArticle":
      const remainingArticles = {...state};
      delete remainingArticles[action.key];
      return remainingArticles;
    case "editArticle":
      const articles = {...state};
      articles[action.key] = action.payload;
      return articles;
    case "addArticle":
      return {...state, [action.key]:action.newArticle};
    default:
      return state;
  }
}

export default articlesReducer;