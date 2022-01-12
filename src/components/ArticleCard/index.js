import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle, articleSelected } from "../../state/actions";
import dateModifier from "../../utils/dateModifier";
import { useStyles } from "./style";
import { Card, ButtonGroup, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ArticleCard = (singleArticle) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { article } = singleArticle;

  return (
    <Card className={classes.card} sx={{
      boxShadow: "none",
      borderRadius: "20px"
    }}>
      <Accordion>
        <AccordionSummary>
          <CardContent sx={{
            height: "320px",
            width: "500px",
            padding: 0
          }}>
            <Typography>
              {dateModifier(article[1].publishedAt)}
              <br />
              @ <a className={classes.websiteLink} 
                  href={article[1].source.url} 
                  target="_blank"
                  rel="noreferrer">
                    {article[1].source.name}
                </a>
            </Typography>
            <CardMedia sx={{
              height: "200px",
              margin: "12px 0"
            }}
              component="img"
              image={article[1].image}
              alt={article[1].title}
            />
            <Typography variant="h6">
              {article[1].title}
            </Typography>
          </CardContent>
        </AccordionSummary>

        <AccordionDetails>
          <CardContent >
            <Typography variant="subtitle2">
              {article[1].description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              <a className={classes.articleLink} 
                href={article[1].url}
                target="_blank"
                rel="noreferrer">
                  {article[1].content}
              </a>
            </Typography>
          </CardContent>
          <ButtonGroup variant="text" size="large">
            <Link 
              className={classes.editButton}
              onClick={() => {dispatch(articleSelected(article[1]))}}
              to={`/edit/${article[1].title}`}>
              <Button color="secondary">
                  Edit
              </Button>
            </Link>
            <Button
              color="error"
              onClick={() => {dispatch(deleteArticle(article[0]))}}>
                Delete
            </Button>
          </ButtonGroup>
        </AccordionDetails>
      </Accordion>
    </Card>
  )
}

export default ArticleCard;