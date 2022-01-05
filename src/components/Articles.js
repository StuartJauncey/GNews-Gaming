import "../css/Articles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/actions";
import { useEffect } from "react";
import getArticles from "../axios/GET";

const Articles = () => {

  const articlesStore = useSelector((state) => state.articles); 
  const dispatch = useDispatch();

  useEffect(() => {
    getArticles()
      .then((data) => {
        dispatch(fetchArticles(data));
        console.log(data);
      })
  }, [])

  console.log(articlesStore);

  return (
    <ul className="article-container">
      {articlesStore.articles.map(article => {
        return (
          <li className="article-card" key={article.title}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <p>{article.content}</p>
            <h4><a href={article.url}>Read more</a></h4>
            <img className="article-image" src={article.image} alt={article.title}/>
            <p>{article.publishedAt}</p>
            <p>{article.source.name}</p>
            <p>{article.source.url}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Articles;