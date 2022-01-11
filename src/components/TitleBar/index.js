import "./Title.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { capitaliseTitle } from "../../utils/capitaliseTitle";

const Title = () => {

  const title = useSelector(state => state.title);

  return (
    <h1 className="title"><Link to="/" className="title-link">GNews {capitaliseTitle(title)}</Link></h1>
  )
}

export default Title;