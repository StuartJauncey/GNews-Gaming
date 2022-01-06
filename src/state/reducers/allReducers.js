import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
  articles: articlesReducer,
  search: searchReducer
})

export default reducers;