const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case "fetchArticles":
      return action.payload;
    case "deleteArticle":
      let newObj = {...state};
      delete newObj[action.key];
      return newObj;
    default:
      return state;
  }
}

export default articlesReducer;