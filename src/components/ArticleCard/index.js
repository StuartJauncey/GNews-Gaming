import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle, articleSelected } from "../../state/actions";
import dateModifier from "../../utils/dateModifier";
import { BsPencil } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { useStyles } from "./style";

const ArticleCard = (singleArticle) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { article } = singleArticle;

  return (
    <li className={classes.card} key={article[0]}>
      <Link className={classes.editButton} onClick={() => {dispatch(articleSelected(article[1]))}} to={`/edit/${article[1].title}`}><BsPencil /></Link>
      <p className={classes.deleteButton} onClick={() => {dispatch(deleteArticle(article[0]))}}><TiDelete /></p>
      <h2 className={classes.title}>{article[1].title}</h2>
      <h3 className={classes.description}>{article[1].description}</h3>
      <p className={classes.content}> <a className={classes.articleLink} href={article[1].url} target="_blank" rel="noreferrer">{article[1].content}</a></p>
      <img className={classes.image} src={article[1].image} alt={article[1].title}/>
      <p className={classes.date}>{dateModifier(article[1].publishedAt)} @ <a className={classes.websiteLink} href={article[1].source.url} target="_blank" rel="noreferrer">{article[1].source.name}</a></p>  
    </li>
  )
}

export default ArticleCard;