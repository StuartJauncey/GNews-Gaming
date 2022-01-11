import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    margin: "10px auto 20px auto",
    width: "90%",
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    justifyContent: "space-around",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "45% 45%"
    },
    "@media (max-width: 800px)": {
      gridTemplateColumns: "90%"
    }
  }
});