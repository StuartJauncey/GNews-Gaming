import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addArticle } from "../../state/actions";
import { useStyles } from "./style";

const AddArticle = () => {
  const classes = useStyles();
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    content: "",
    url: "",
    image: "",
    publishedAt: new Date().toISOString(),
    source: {
      name: "",
      url: ""
    }
  })

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNewArticle({...newArticle, [event.target.name]:event.target.value});
  }

  const handleSourceChange = (event) => {
    setNewArticle({...newArticle, source: { ...newArticle.source, [event.target.name]:event.target.value}});
  }

  const handleSubmit = () => {
    setNewArticle({...newArticle, publishedAt:new Date().toISOString()});
    dispatch(addArticle(newArticle, newArticle.title));
  }

  return (
    <div>
      <h2>Add New Article</h2>
        <form className={classes.form}>
        <h3 className={classes.subheading}>Title</h3>
          <input name="title" className={classes.narrowField} value={newArticle.title} onChange={handleChange}/>
          <h3 className={classes.subheading}>Description</h3>
          <textarea name="description" className={classes.wideField} value={newArticle.description} onChange={handleChange}/>
          <h3 className={classes.subheading}>Content</h3>
          <textarea name="content" className={classes.wideField} value={newArticle.content} onChange={handleChange}/>
          <h3 className={classes.subheading}>Article URL</h3>
          <input name="url" className={classes.narrowField} value={newArticle.url} onChange={handleChange}/>
          <h3 className={classes.subheading}>Image URL</h3>
          <input name="image" className={classes.narrowField} value={newArticle.image} onChange={handleChange}/>
          <h3 className={classes.subheading}>Website Name</h3>
          <input name="name" className={classes.narrowField} value={newArticle.source.name} onChange={handleSourceChange}/>
          <h3 className={classes.subheading}>Website URL</h3>
          <input name="url" className={classes.narrowField} value={newArticle.source.url} onChange={handleSourceChange}/>
          <Link className={classes.submitButton} to="/" onClick={handleSubmit}>Submit Article</Link>
          <img className={classes.image} src={newArticle.image} alt={newArticle.name}></img>
        </form>
    </div>
  )
}

export default AddArticle;