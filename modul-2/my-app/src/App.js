import './App.css';
import Search from './components/search/index';
import Gif from './components/gif/index';
import gifData from './data/gifData';

function App(props) {
  return (
    <div className="App">
      <Search />
      <Gif url={gifData.url} />
    </div>
  );
}

export default App;
