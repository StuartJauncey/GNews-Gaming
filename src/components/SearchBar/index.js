import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../../state/actions";
import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useStyles } from "./style";

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
        <input className={classes.searchInput} value={searchType} onChange={handleChange} />
        <button className={classes.searchButton}><BsSearch /></button>
      </form>
      <Link className={classes.addArticleLink} to="/add-article"><Button variant="contained">Add Article</Button></Link>
    </div>
    

   
  )
}

export default SearchBar;