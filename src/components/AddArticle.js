import "../css/AddArticle.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addArticle } from "../state/actions";

const AddArticle = () => {

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
        <form className="add-form">
        <h3 className="add-text">Title</h3>
          <input name="title" className="article-add-narrow" value={newArticle.title} onChange={handleChange}/>
          <h3 className="add-text">Description</h3>
          <textarea name="description" className="article-add" value={newArticle.description} onChange={handleChange}/>
          <h3 className="add-text">Content</h3>
          <textarea name="content" className="article-add" value={newArticle.content} onChange={handleChange}/>
          <h3 className="add-text">Article URL</h3>
          <input name="url" className="article-add-narrow" value={newArticle.url} onChange={handleChange}/>
          <h3 className="add-text">Image URL</h3>
          <input name="image" className="article-add-narrow" value={newArticle.image} onChange={handleChange}/>
          <h3 className="add-text">Website Name</h3>
          <input name="name" className="article-add-narrow" value={newArticle.source.name} onChange={handleSourceChange}/>
          <h3 className="add-text">Website URL</h3>
          <input name="url" className="article-add-narrow" value={newArticle.source.url} onChange={handleSourceChange}/>
          <Link className="submit-add-button" to="/" onClick={handleSubmit}>Submit Article</Link>
          <img className="article-add-image" src={newArticle.image} alt={newArticle.name}></img>
        </form>
    </div>
  )
}

export default AddArticle;