import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from './components/Article';
import Articles from './components/Articles';
import SearchBar from './components/SearchBar';
import Title from './components/TitleBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Title /><SearchBar /><Articles /></>}/>
          <Route path="/edit/:article_name" element={<><Title /><Article /></>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
