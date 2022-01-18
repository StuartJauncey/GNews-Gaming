import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  headerBar: {
    backgroundColor: "black",
    display: "grid !important",
    gridTemplateColumns: "30% 40% 30%",
    "@media (max-width: 1580px)": {
      gridTemplateColumns: "1fr 1fr 1fr"
    },
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr 2fr 3fr"
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr 1fr 3fr"
    }
  },
  addArticleLink: {
    textDecoration: "none"
  },
  addArticleButton: {
    color: "white !important",
    fontSize: "16px",
    "&:hover": {
      color: "rgb(220, 220, 220) !important",
    }
  },
  title: {
    fontSize: "30px !important",
    display: "flex",
    justifySelf: "center",
    alignSelf: "center"
  },
  titleLink: {
    color: "white",
    textShadow: "1px 1px 2px black",
    fontFamily: "Saira Condensed",
    textDecoration: "none",
    "&:hover": {
      opacity: "85%"
    },
    "@media (max-width: 600px)": {
      fontSize: "22px"
    }
  }
})