import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  card: {
    margin: "30px 0 30px 0",
    width: "500px",
    justifySelf: "center"
  },
  editButton: {
    textDecoration: "none",
  },
  articleLink: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "rgb(35, 35, 150)"
    }
  },
  websiteLink: {
    textDecoration: "none"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  }
});