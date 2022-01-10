const titleReducer = (state = "gaming", action) => {
  switch(action.type) {
    case "setTitle":
      return action.title;
    default:
      return state;
  }
}

export default titleReducer; 