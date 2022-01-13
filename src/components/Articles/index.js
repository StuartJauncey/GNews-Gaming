import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchArticles } from "../../state/actions";
import ArticleCard from "../ArticleCard";
import { useStyles } from "./style";

const Articles = () => {
  const classes = useStyles();
  const articlesStore = useSelector(state => state.articles);
  const searchTerm = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchArticles(searchTerm))
    }
  }, [searchTerm]);

  return (
      <ul className={classes.container}>
        {Object.entries(articlesStore).map(article => {
          return (
            <ArticleCard key={article.title} article={article}/>
          )
        })}
      </ul>
  )
}

export default Articles;