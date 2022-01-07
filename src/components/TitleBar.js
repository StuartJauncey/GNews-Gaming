import "../css/Title.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { capitaliseTitle } from "../utils/capitaliseTitle";

const Title = () => {

  const searchTerm = useSelector(state => state.search);

  return (
    <h1 className="title"><Link to="/" className="title-link">GNews {capitaliseTitle(searchTerm)}</Link></h1>
  )
}

export default Title;