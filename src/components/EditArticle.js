import "../css/EditArticle.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editArticle } from "../state/actions";
import { Link } from "react-router-dom";

const EditArticle = () => {
  const article = useSelector(state => state.selectArticle);

  const [modifiedArticle, setModifiedArticle] = useState({
    title: article.title,
    description: article.description,
    content: article.content,
    url: article.url,
    image: article.image,
    publishedAt: article.publishedAt,
    source: {
      name: article.source.name,
      url: article.source.url
    }
  })

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setModifiedArticle({...modifiedArticle, [event.target.name]:event.target.value})
  }

  const handleSubmit = () => {
    dispatch(editArticle(article.title, modifiedArticle));
  }

  return (
    <div>
      <h2>Edit Article</h2>
      <h2 className="edit-title">{article.title}</h2>
        <form className="edit-form">
          <h3 className="edit-text">Description</h3>
          <textarea name="description" className="article-edit" value={modifiedArticle.description} onChange={handleChange}/>
          <h3 className="edit-text">Content</h3>
          <textarea name="content" className="article-edit" value={modifiedArticle.content} onChange={handleChange}/>
          <h3 className="edit-text">Image</h3>
          <textarea name="image" className="article-edit" value={modifiedArticle.image} onChange={handleChange}/>
          <Link className="submit-edit-button" to="/" onClick={handleSubmit}>Submit Edit</Link>
          <img className="article-edit-image" src={modifiedArticle.image} alt={modifiedArticle.title}></img>
        </form>
        
    </div>
  )
}
export default EditArticle;