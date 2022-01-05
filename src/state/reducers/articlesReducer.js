const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case "fetchArticles":
      return action.payload;
    default:
      return state;
  }
}

export default articlesReducer;