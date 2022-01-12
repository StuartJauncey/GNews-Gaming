import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  title: {
    backgroundColor: "white",
    textShadow: "0.5px 0.5px 1px grey",
    width: "fit-content",
    margin: "30px auto",
    padding: "10px 40px",
    borderRadius: "10px",
    boxShadow: "1px 1px 4px rgb(205, 203, 204)"
  },
  titleLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "blueviolet"
    }
  }
})