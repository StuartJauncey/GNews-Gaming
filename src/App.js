import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Articles from './components/Articles';
import Title from './components/TitleBar';
import { useStyles }  from "./style";


function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<><Title /><Articles /></>}/>
          <Route path="/add-article" element={<><Title /><AddArticle /></>}/>
          <Route path="/edit/:article_name" element={<><Title /><EditArticle /></>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
