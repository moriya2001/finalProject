import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import LoginPage from './components/1-loginPage';
import Movie from './components/movie';
import { Route, Routes } from "react-router-dom"
import Addmovie from './components/Addmovie';
import Subscriptions from './components/Subscriptions';
import AddMember from './components/AddMember';
import MovieWached from './components/MovieWached';
import MovieChild from './components/movie';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />}>
        <Route path="movies" element={<Movies/>} />
        <Route path="addmovie" element={<Addmovie/>}/>
        <Route path="addmember" element={<AddMember/>}/>
        <Route path='subscription'element={<Subscriptions/>}/>
       <Route path="detailsMovie" element={<MovieWached/>}/>
      </Route>
     </Routes>
    
    </div>
  );
}

export default App;
