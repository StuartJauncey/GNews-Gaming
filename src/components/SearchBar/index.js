import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../../state/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import { useStyles } from "./style";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const classes = useStyles();
  const [searchType, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTitle(searchType));
    dispatch(searchTerm(searchType));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <form className={classes.searchBar} onSubmit={handleSubmit}>
        <TextField sx={{width: "300px"}} variant="standard" label="Search" value={searchType} onChange={handleChange} />
        <button className={classes.searchButton}><SearchIcon /></button>
      </form>
      <Link className={classes.addArticleLink} to="/add-article"><Button variant="contained">Add Article</Button></Link>
    </div>
    

   
  )
}

export default SearchBar;