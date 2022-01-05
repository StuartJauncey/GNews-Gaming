export const getArticles = (articles) => {
  return (dispatch) => {
    dispatch({
      type: "getArticles",
      payload: articles
    })
  }
}