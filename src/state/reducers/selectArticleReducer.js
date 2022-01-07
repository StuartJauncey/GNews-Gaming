const selectArticleReducer = (state = "", action) => {
  switch(action.type) {
    case "articleSelected":
      return action.payload;
    default:
      return state;
  }
}

export default selectArticleReducer;