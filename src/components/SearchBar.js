import { useDispatch, useSelector } from "react-redux";
import { searchTerm } from "../state/actions";
import { useState } from "react";

const SearchBar = () => {

  const [searchType, setSearch] = useState("gaming");

  const searchInput = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchTerm(searchType));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchType} onChange={handleChange} />
      <button>Search</button>
      <h1>{searchInput}</h1>
    </form>
   
  )
}

export default SearchBar;