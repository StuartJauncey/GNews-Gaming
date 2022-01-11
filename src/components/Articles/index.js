import "./Articles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchArticles } from "../../state/actions";
import ArticleCard from "../ArticleCard";


const Articles = () => {

  const articlesStore = useSelector(state => state.articles);
  const searchTerm = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchArticles(searchTerm))
    }
  }, [searchTerm]);

  return (
      <ul className="article-container">
        {Object.entries(articlesStore).map(article => {
          return (
            <ArticleCard article={article}/>
          )
        })}
      </ul>
  )
}

export default Articles;