import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: "whitesmoke",
      margin: "0",
      textAlign: "center",
      fontFamily: "arial",
    },
    ul: {
      margin: "0",
      padding: "0"
    }
  }
});