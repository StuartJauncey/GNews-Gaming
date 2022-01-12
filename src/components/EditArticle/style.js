import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  title: {
    margin: "0"
  },
  form: {
    margin: "0 auto 40px auto",
    padding: "20px",
    width: "600px",
    backgroundColor: "white",
    boxShadow: "1px 1px 4px rgb(205, 203, 204)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column"
  },
  submitButton: {
    textDecoration: "none",
    width: "30%",
    margin: "20px auto 10px auto",
  },
  image: {
    maxHeight: "200px",
    margin: "10px auto"
  }
});