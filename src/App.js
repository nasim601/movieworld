
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './pages/home/home';
import MovieList from './Components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          
          <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/*' element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
