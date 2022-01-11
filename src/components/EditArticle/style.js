import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  form: {
    margin: "auto auto 40px auto",
    padding: "20px",
    width: "80%",
    display: "grid",
    gridTemplateColumns: "20% 80%",
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 4px rgb(205, 203, 204)",
    borderRadius: "5px"
  },
  title: {
    margin: "20px auto",
    padding: "5px 25px",
    width: "fit-content",
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 4px rgb(205, 203, 204)",
    borderRadius: "5px"
  },
  text: {
    alignSelf: "center"
  },
  submitButton: {
    textDecoration: "none",
    width: "60%",
    margin: "auto",
    backgroundColor: "rgb(215, 26, 100)",
    color: "white",
    textShadow: "1px 1px 3px rgb(116, 17, 55)",
    padding: "10px 10px",
    borderRadius: "30px",
    boxShadow: "2px 2px 6px rgb(116, 17, 55)",
    "&:hover": {
      color: "yellow"
    }
  },
  field: {
    height: "90px",
    margin: "10px 0"
  },
  image: {
    width: "40%",
    minWidth: "200px",
    margin: "10px auto"
  }
});