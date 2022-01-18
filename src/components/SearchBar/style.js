import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchBar: {
    margin: "0",
    display: "flex",
    justifyContent: "center"
  },
  searchButton: {
    color: "white !important",
    "&:hover": {
      color: "rgb(220, 220, 220) !important"
    }
  },
  searchField: {
    width: "65%",
    alignSelf: "center",
    backgroundColor: "whitesmoke",
    opacity: "70%",
    "&:hover": {
      opacity: "90%"
    }
  }
});