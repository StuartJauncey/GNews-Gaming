const searchReducer = (state = "gaming", action) => {
  switch (action.type) {
    case "searchTerm":
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;