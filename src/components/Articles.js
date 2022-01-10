import "../css/Articles.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchArticles, deleteArticle, articleSelected } from "../state/actions";
import { useEffect } from "react";
import dateModifier from "../utils/dateModifier";
import { BsPencil } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";


const Articles = () => {

  const articlesStore = useSelector(state => state.articles);
  const searchTerm = useSelector(state => state.search);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (searchTerm) {
  //     dispatch(searchArticles(searchTerm))
  //   }
  // }, [searchTerm]);

  return (
    <div>
      <ul className="article-container">
        {Object.entries(articlesStore).map(article => {
          return (
            <li className="article-card" key={article[0]}>
              <Link className="edit-article-button" onClick={() => {dispatch(articleSelected(article[1]))}} to={`/edit/${article[1].title}`}><BsPencil /></Link>
              <p className="delete-article-button" onClick={() => {dispatch(deleteArticle(article[0]))}}><TiDelete /></p>
              <h2 className="article-title">{article[1].title}</h2>
              <h3 className="article-description">{article[1].description}</h3>
              <p className="article-content"> <a className="article-link"href={article[1].url} target="_blank" rel="noreferrer">{article[1].content}</a></p>
              <img className="article-image" src={article[1].image} alt={article[1].title}/>
              <p className="article-time">{dateModifier(article[1].publishedAt)} @ <a className="article-website-link" href={article[1].source.url} target="_blank" rel="noreferrer">{article[1].source.name}</a></p>  
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Articles;