const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case "getArticles":
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default articlesReducer;