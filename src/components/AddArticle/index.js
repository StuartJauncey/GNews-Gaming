import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addArticle } from "../../state/actions";
import { useStyles } from "./style";
import { TextField, Button } from "@mui/material";

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
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();
  const urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  const handleChange = (event) => {
    setError(false);
    setNewArticle({...newArticle, [event.target.name]:event.target.value});
  }

  const handleSourceChange = (event) => {
    setError(false);
    setNewArticle({...newArticle, source: { ...newArticle.source, [event.target.name]:event.target.value}});
  }

  const handleSubmit = (event) => {
    if (newArticle.title !== "" && newArticle.description !== "" && newArticle.content !== "" && urlRegex.test(newArticle.url) && urlRegex.test(newArticle.image) && newArticle.source.name !== "" && urlRegex.test(newArticle.source.url)) {
      setNewArticle({...newArticle, publishedAt:new Date().toISOString()});
      dispatch(addArticle(newArticle, newArticle.title));
    } else {
      setError(true);
      event.preventDefault();
    }
  }

  return (
    <div>
      <form className={classes.form}>
        <h2 className={classes.title}>Add New Article</h2>
        <TextField name="title"
          error={newArticle.title.length === 0 && isError ? true : false}
          helperText={newArticle.title.length === 0 && isError ? "Field cannot be empty." : ""}
          required
          className={classes.field}
          label="Title"
          variant="outlined"
          margin="normal"
          value={newArticle.title}
          onChange={handleChange}
        />
        <TextField name="description"
          error={newArticle.description.length === 0 && isError  ? true : false}
          helperText={newArticle.description.length === 0 && isError ? "Field cannot be empty." : ""}
          required
          className={classes.field}
          label="Description"
          multiline
          variant="outlined"
          margin="normal"
          value={newArticle.description}
          onChange={handleChange}
        />
        <TextField name="content"
          error={newArticle.content.length === 0 && isError  ? true : false}
          helperText={newArticle.content.length === 0 && isError ? "Field cannot be empty." : ""}
          required className={classes.field}
          label="Content"
          multiline
          variant="outlined"
          margin="normal"
          value={newArticle.content}
          onChange={handleChange}
        />
        <TextField name="url"
          error={!urlRegex.test(newArticle.url) && isError ? true : false}
          helperText={!urlRegex.test(newArticle.url) && isError ? "Must be a valid URL." : ""}
          required
          className={classes.field}
          label="Article URL"
          variant="outlined"
          margin="normal"
          value={newArticle.url}
          onChange={handleChange}
        />
        <TextField name="image"
          error={!urlRegex.test(newArticle.image) && isError ? true : false}
          helperText={!urlRegex.test(newArticle.image) && isError ? "Must be a valid URL." : ""}
          required
          className={classes.field}
          label="Image URL"
          variant="outlined"
          margin="normal"
          value={newArticle.image}
          onChange={handleChange}
        />
        <img className={classes.image} src={newArticle.image} alt="Preview"></img>
        <TextField name="name"
          error={newArticle.source.name.length === 0 && isError ? true : false}
          helperText={newArticle.source.name.length === 0 && isError ? "Field cannot be empty." : ""}
          required className={classes.field}
          label="Source Name"
          variant="outlined"
          margin="normal"
          value={newArticle.source.name}
          onChange={handleSourceChange}
        />
        <TextField name="url"
          error={!urlRegex.test(newArticle.source.url) && isError ? true : false}
          helperText={!urlRegex.test(newArticle.source.url) && isError ? "Must be a valid URL." : ""}
          required
          className={classes.field}
          label="Source URL"
          variant="outlined"
          margin="normal"
          value={newArticle.source.url}
          onChange={handleSourceChange}
        />
        <Link className={classes.submitButton} to="/" onClick={handleSubmit}><Button >Submit Article</Button></Link>
      </form>
    </div>
  )
}

export default AddArticle;