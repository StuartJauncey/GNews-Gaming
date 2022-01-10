import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import searchReducer from "./searchReducer";
import selectArticleReducer from "./selectArticleReducer";
import titleReducer from "./titleReducer";

const reducers = combineReducers({
  articles: articlesReducer,
  search: searchReducer,
  selectArticle: selectArticleReducer,
  title: titleReducer
})

export default reducers;