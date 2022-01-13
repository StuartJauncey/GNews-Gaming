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
        <Toolbar disableGutters variant="dense" sx={{
          display: "grid",
          gridTemplateColumns: "30% 40% 30%"
        }}>
          <IconButton>
            <Link className={classes.addArticleLink} to="/add-article">
              <Button sx={{
                  color: "white",
                  fontSize: "16px",
                  "&:hover": {
                    color: "rgb(220, 220, 220)",
                  }
                }}
                variant="outlined"
                endIcon={<AddCircleIcon />}
              >
                Add
              </Button>
            </Link>
          </IconButton>
          <Typography>
            <Link to="/" className={classes.title}>
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