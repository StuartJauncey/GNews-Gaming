import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Articles from './components/Articles';
import SearchBar from './components/SearchBar';
import Title from './components/TitleBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Title /><SearchBar /><Articles /></>}/>
          <Route path="/add-article" element={<><Title /><AddArticle /></>}/>
          <Route path="/edit/:article_name" element={<><Title /><EditArticle /></>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
