import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle, articleSelected } from "../../state/actions";
import dateModifier from "../../utils/dateModifier";
import trimTitle from "../../utils/trimTitle";
import { useStyles } from "./style";
import { Card, ButtonGroup, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ArticleCard = (singleArticle) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { article } = singleArticle;

  return (
    <Card className={classes.card} sx={{
      boxShadow: "1px 1px 5px rgb(220, 220, 220)",
      borderRadius: "30px",
      height: "fit-content"
    }}>
      <Accordion>
        <AccordionSummary>
          <CardContent sx={{
            height: "340px",
            width: "500px",
            padding: 0
          }}>
            <Typography sx={{
              fontFamily: "Lato"
            }}>
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
              height: "230px",
              margin: "12px 0",
            }}
              component="img"
              image={article[1].image}
              alt={article[1].title}
            />
            <Typography sx={{
                padding:"0 20px",
                alignSelf: "center",
                fontFamily: "Saira Condensed"
              }}
              variant="h6">
              {trimTitle(article[1].title)}
            </Typography>
          </CardContent>
        </AccordionSummary>

        <AccordionDetails>
          <CardContent >
            <Typography sx={{
              fontSize: "22px",
              fontFamily: "Rubik"
            }}>
              {article[1].description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{
              fontFamily: "Rubik"
            }}>
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