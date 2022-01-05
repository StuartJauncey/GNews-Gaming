const articlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case "fetchArticles":
      return action.payload;
    default:
      return state;
  }
}

export default articlesReducer;