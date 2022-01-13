import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  title: {
    color: "white",
    fontSize: "32px",
    textShadow: "1px 1px 2px black",
    fontFamily: "Saira Condensed",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(220, 220, 220)"
    }
  },
  addArticleLink: {
    textDecoration: "none"
  }
})