import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editArticle } from "../../state/actions";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { TextField, Button } from "@mui/material";

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
  });

  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setError(false);
    setModifiedArticle({...modifiedArticle, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    if (modifiedArticle.title !== "" && modifiedArticle.description !== "" && modifiedArticle.content !== "" && modifiedArticle.url !== "" && modifiedArticle.image !== "" && modifiedArticle.source.name !== "" && modifiedArticle.source.url !== "") {
      dispatch(editArticle(article.title, modifiedArticle));
    } else {
      setError(true);
      event.preventDefault();
  }
  }

  return (
    <div>
      <form className={classes.form}>
        <h2 className={classes.title}>Editing: {article.title}</h2>
        <TextField name="description"
          error={modifiedArticle.description.length === 0 && isError  ? true : false}
          helperText={modifiedArticle.description.length === 0 && isError ? "Field cannot be empty." : ""}
          required
          className={classes.field}
          label="Description"
          multiline
          variant="outlined"
          margin="normal"
          value={modifiedArticle.description}
          onChange={handleChange}
        />
        <TextField name="content"
          error={modifiedArticle.content.length === 0 && isError  ? true : false}
          helperText={modifiedArticle.content.length === 0 && isError ? "Field cannot be empty." : ""}
          required
          className={classes.field}
          label="Content"
          multiline
          variant="outlined"
          margin="normal"
          value={modifiedArticle.content}
          onChange={handleChange}
        />
        <TextField name="image"
          error={modifiedArticle.image.length === 0 && isError  ? true : false}
          helperText={modifiedArticle.image.length === 0 && isError ? "Field cannot be empty." : ""}
          required
          className={classes.field}
          label="Image URL"
          variant="outlined"
          margin="normal"
          value={modifiedArticle.image}
          onChange={handleChange}
        />
        <img className={classes.image} src={modifiedArticle.image} alt="Preview image"></img>
        <Link className={classes.submitButton} to="/" onClick={handleSubmit}><Button>Submit Edit</Button></Link>
      </form>    
    </div>
  )
}
export default EditArticle;