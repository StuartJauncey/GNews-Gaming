import "../css/Title.css"
import { useSelector } from "react-redux";
import { capitaliseTitle } from "../utils/capitaliseTitle";

const Title = () => {

  const searchTerm = useSelector(state => state.search);

  return (
    <h1 className="title">GNews {capitaliseTitle(searchTerm)}</h1>
  )
}

export default Title;