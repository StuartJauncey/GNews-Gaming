import "../css/SearchBar.css"
import { useDispatch, useSelector } from "react-redux";
import { searchTerm, fetchArticles } from "../state/actions";
import { useState } from "react";
import { BsSearch } from "react-icons/bs"

const SearchBar = () => {

  const [searchType, setSearch] = useState("gaming");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchTerm(searchType));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input className="search-input" value={searchType} onChange={handleChange} />
      <button className="search-button"><BsSearch /></button>
    </form>
   
  )
}

export default SearchBar;