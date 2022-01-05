import "../css/Articles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/actions";
import { useEffect } from "react";
import getArticles from "../axios/GET";

const Articles = () => {

  const articlesStore = useSelector((state) => state.articles); 
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getArticles()
  //     .then((data) => {
  //       dispatch(fetchArticles(data));
  //     })
  // }, [])

  return (
    <ul className="article-container">
      {Object.entries(articlesStore).map(article => {
        return (
          <li className="article-card" key={article[0]}>
            <h2>{article[1].title}</h2>
            <h3>{article[1].description}</h3>
            <p>{article[1].content}</p>
            <h4><a href={article[1].url}>Read more</a></h4>
            <img className="article-image" src={article[1].image} alt={article[1].title}/>
            <p>{article[1].publishedAt}</p>
            <p>{article[1].source.name}</p>
            <p>{article[1].source.url}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Articles;