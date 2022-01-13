import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  '@global': {
    body: {
      fontFamily: "Saira Condensed",
      backgroundColor: "whitesmoke",
      margin: "0",
      textAlign: "center",
    },
    ul: {
      margin: "0",
      padding: "0"
    }
  }
});