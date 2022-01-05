import './css/App.css';
import Articles from './components/Articles';
import SearchBar from './components/SearchBar';
import Title from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchBar />
      <Articles />
    </div>
  );
}

export default App;
