import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle, articleSelected } from "../../state/actions";
import dateModifier from "../../utils/dateModifier";
import trimTitle from "../../utils/trimTitle";
import { useStyles } from "./style";
import { Card, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const ArticleCard = (singleArticle) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { article } = singleArticle;

  return (
    <Card classes={{ root: classes.card }}>
      <Accordion>
        <AccordionSummary classes={{ root: classes.summaryRoot }}>
          <CardContent classes={{ root: classes.topCard }}>
            <Typography classes={{ root: classes.date }} sx={{ fontFamily: "Lato" }}>
              {dateModifier(article[1].publishedAt)}
              <br />
              @ <a className={classes.websiteLink} 
                  href={article[1].source.url} 
                  target="_blank"
                  rel="noreferrer">
                    {article[1].source.name}
                </a>
            </Typography>
            <CardMedia 
              classes={{ root: classes.cardMediaRoot }}
              component="img"
              image={article[1].image}
              alt={article[1].title}
            />
            <Typography
              classes={{ root: classes.title }}
              variant="h6">
              {trimTitle(article[1].title)}
            </Typography>
          </CardContent>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.detailsRoot }}>
          <CardContent>
            <Typography sx={{fontSize: "21px", fontFamily: "Rubik"}}>
              {article[1].description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{fontSize: "15px", fontFamily: "Rubik"}}>
              {article[1].content}
            </Typography>
          </CardContent>
          <CardContent sx={{display: "flex", justifyContent:"space-evenly"}}>
            <Link 
              className={classes.editButton}
              onClick={() => {dispatch(articleSelected(article[1]))}}
              to={`/edit/${article[1].title}`}>
              <Button variant="outlined" color="secondary">
                Edit
              </Button>
            </Link>
            <a className={classes.articleLink}
               href={article[1].url}
               target="_blank"
               rel="noreferrer">
              <Button variant="outlined" color="primary">
                  Read more
              </Button>
            </a>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {dispatch(deleteArticle(article[0]))}}>
                Delete
            </Button>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  )
}

export default ArticleCard;