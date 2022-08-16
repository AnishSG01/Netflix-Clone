import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Movies from './components/Movies/Movies.jsx';
import Tvshows from './components/Tvshows/Tvshows';
import Recentlyadded from './components/Recentlyadded/Recentlyadded';
import Mylist from './components/Mylist/Mylist';
import Header from './components/Header/Header';
function App() {
  return (
    <>
    <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/recentlyadded" element={<Recentlyadded />} />
        <Route path="/mylist" element={<Mylist />} />
        
      </Routes>
    
    </Router>
    </>
    
  );
}

export default App;
