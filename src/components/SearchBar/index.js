import { useDispatch } from "react-redux";
import { searchTerm, setTitle } from "../../state/actions";
import { useState } from "react";
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
        <Button classes={{ root: classes.searchButton }}>
          <SearchIcon />
        </Button>
        <TextField
          classes={{ root: classes.searchField }}
          inputProps={{style: {fontFamily: "Lato"}}}
          variant="standard"
          value={searchType}
          autoComplete="off"
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SearchBar;