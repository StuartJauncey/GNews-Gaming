import "../css/Articles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, deleteArticle } from "../state/actions";
import { useState, useEffect } from "react";
import getArticles from "../axios/GET";
import dateModifier from "../utils/dateModifier";

const Articles = () => {

  const [articleCount, setArticleCount] = useState(0);

  const articlesStore = useSelector(state => state.articles);
  const searchTerm = useSelector(state => state.search);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getArticles(searchTerm)
  //     .then((data) => {
  //       console.log(data);
  //       setArticleCount(data.totalArticles);
  //       const articlesFound = data.articles.reduce((obj, item) => ({
  //       ...obj, [item["title"]]: item
  //       }), {});
  //       dispatch(fetchArticles(articlesFound));
  //     })
  // }, [searchTerm]);

  return (
    <div>
      <p>Displaying {Object.keys(articlesStore).length} of {articleCount} results</p>
      <ul className="article-container">
        {Object.entries(articlesStore).map(article => {
          return (
            <li className="article-card" key={article[0]}>
              <button className="delete-article-button" onClick={() => {dispatch(deleteArticle(article[0]))}}>X</button>
              <h2>{article[1].title}</h2>
              <h3>{article[1].description}</h3>
              <p>{article[1].content}</p>
              <h4><a href={article[1].url}>Read more</a></h4>
              <img className="article-image" src={article[1].image} alt={article[1].title}/>
              <p>{dateModifier(article[1].publishedAt)} @ <a href={article[1].source.url}>{article[1].source.name}</a></p>  
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Articles;