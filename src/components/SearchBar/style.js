import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchBar: {
    backgroundColor: "rgb(215, 26, 100)",
    width: "40%",
    margin: "0 auto 20px auto",
    padding: "10px",
    borderRadius: "30px",
    boxShadow: "2px 2px 6px rgb(116, 17, 55)",
    display: "flex",
    justifyContent: "center"
  },
  searchInput: {
    height: "22px",
    width: "60%"
  },
  searchButton: {
    height: "auto",
    margin: "0 2px"
  },
  addArticleLink: {
    textDecoration: "none"
  }
});