import "./SearchBar.css"
import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../../state/actions";
import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const SearchBar = () => {

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
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search-input" value={searchType} onChange={handleChange} />
        <button className="search-button"><BsSearch /></button>
      </form>
      <Link className="add-article-link" to="/add-article"><Button variant="contained">Add Article</Button></Link>
    </div>
    

   
  )
}

export default SearchBar;