import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { capitaliseTitle } from "../../utils/capitaliseTitle";
import { useStyles } from "./style";
import { AppBar, Box, Button, Toolbar, IconButton, Typography } from '@mui/material';
import SearchBar from "../SearchBar";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Title = () => {
  const classes = useStyles();
  const title = useSelector(state => state.title);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          classes={{ root: classes.headerBar }}
          disableGutters
          variant="dense">
          <IconButton>
            <Link className={classes.addArticleLink} to="/add-article">
              <Button classes={{ root: classes.addArticleButton }}
                variant="standard"
                endIcon={<AddCircleIcon />}
              >
                Add
              </Button>
            </Link>
          </IconButton>
          <Typography classes={{ root: classes.title }}>
            <Link to="/" className={classes.titleLink}>
              GNews {capitaliseTitle(title)}
            </Link>
          </Typography>
          <Box>
            <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Title;