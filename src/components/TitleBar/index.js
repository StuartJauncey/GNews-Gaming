import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { capitaliseTitle } from "../../utils/capitaliseTitle";
import { useStyles } from "./style";

const Title = () => {
  const classes = useStyles();
  const title = useSelector(state => state.title);

  return (
    <h1 className={classes.title}>
      <Link to="/" className={classes.titleLink}>
        GNews {capitaliseTitle(title)}
      </Link>
    </h1>
  )
}

export default Title;