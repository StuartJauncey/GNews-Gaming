import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editArticle } from "../../state/actions";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

const EditArticle = () => {
  const classes = useStyles();
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
      <h2 className={classes.title}>{article.title}</h2>
        <form className={classes.form}>
          <h3 className={classes.text}>Description</h3>
          <textarea name="description" className={classes.field} value={modifiedArticle.description} onChange={handleChange}/>
          <h3 className={classes.text}>Content</h3>
          <textarea name="content" className={classes.field} value={modifiedArticle.content} onChange={handleChange}/>
          <h3 className={classes.text}>Image</h3>
          <textarea name="image" className={classes.field} value={modifiedArticle.image} onChange={handleChange}/>
          <Link className={classes.submitButton} to="/" onClick={handleSubmit}>Submit Edit</Link>
          <img className={classes.image} src={modifiedArticle.image} alt={modifiedArticle.title}></img>
        </form>
        
    </div>
  )
}
export default EditArticle;