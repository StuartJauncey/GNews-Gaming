import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import searchReducer from "./searchReducer";
import selectArticleReducer from "./selectArticleReducer";

const reducers = combineReducers({
  articles: articlesReducer,
  search: searchReducer,
  selectArticle: selectArticleReducer
})

export default reducers;