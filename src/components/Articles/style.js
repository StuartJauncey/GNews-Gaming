import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    margin: "20px auto 40px auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    "@media (max-width: 1580px)": {
      gridTemplateColumns: "1fr 1fr"
    },
    "@media (max-width: 1060px)": {
      gridTemplateColumns: "1fr"
    }
  }
});