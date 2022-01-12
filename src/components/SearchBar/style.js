import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchBar: {
    margin: "0 auto 30px auto",
    display: "flex",
    justifyContent: "center"
  },
  searchButton: {
    border: "none",
    backgroundColor: "whitesmoke",
    cursor: "pointer",
    "&:hover": {
      color: "blueviolet"
    }
  },
  addArticleLink: {
    textDecoration: "none"
  }
});