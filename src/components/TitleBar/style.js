import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  title: {
    backgroundColor: "rgb(215, 26, 100)",
    textShadow: "1px 1px 3px rgb(116, 17, 55)",
    width: "80%",
    margin: "20px auto",
    padding: "10px 10px",
    borderRadius: "30px",
    boxShadow: "2px 2px 6px rgb(116, 17, 55)"
  },
  titleLink: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "yellow"
    }
  }
})