import "../css/SearchBar.css"
import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../state/actions";
import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom";

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
      <Link className="add-article-button" to="/add-article">Add Article</Link>
    </div>
    

   
  )
}

export default SearchBar;