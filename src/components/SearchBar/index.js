import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../../state/actions";
import { useState } from "react";
import { Button, TextField, Box } from '@mui/material';
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
        <Button sx={{
          padding: "0",
          color: "white",
          "&:hover": {
            color: "rgb(220, 220, 220)"
          }
        }}
          className={classes.searchButton}>
            <SearchIcon />
        </Button>
        <TextField sx={{
          width: "70%",
          alignSelf: "center",
          backgroundColor: "white",
          opacity: "60%",
          "&:hover": {
            opacity: "90%"
          }
        }}
          variant="standard"
          value={searchType}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SearchBar;