import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  card: {
    backgroundColor: "black !important",
    margin: "30px 0 30px 0",
    width: "500px",
    justifySelf: "center",
    boxShadow: "1px 1px 10px rgb(220, 220, 220) !important",
    borderRadius: "30px !important",
    height: "fit-content !important",
    "@media (max-width: 600px)": {
      width: "400px"
    }
  },
  summaryRoot: {
    backgroundColor: "black !important",
    color: "white !important"
  },
  websiteLink: {
    textDecoration: "none",
    color: "skyblue"
  },
  cardMediaRoot: {
    height: "324px",
    margin: "12px 0",
    position: "absolute"
  },
  topCard: {
    height: "340px",
    width: "500px",
    paddingTop: "0px !important",
    "@media (max-width: 600px)": {
      width: "400px"
    }
  },
  title: {
    display: "flex",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.7) !important",
    marginTop: "255px !important",
    height: "80px",
    padding: "3px 20px 0 20px",
    opacity: "99%",
    fontFamily: "Saira Condensed !important"
  },
  detailsRoot: {
    borderRadius: "5px"
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
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  }
});