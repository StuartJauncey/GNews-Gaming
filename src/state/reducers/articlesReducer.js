const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case "setArticles":
      return action.payload;
    case "deleteArticle":
      let newObj = {...state};
      delete newObj[action.key];
      return newObj;
    case "editArticle":
      let editObj = {...state};
      editObj[action.key] = action.payload;
      return editObj;
    default:
      return state;
  }
}

export default articlesReducer;