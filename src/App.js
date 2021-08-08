

import './App.css';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import { Navbar } from './components/Navbar';
const APIKEY = '4cb9def9';



const APIURL = 'https://www.omdbapi.com';

const fetchMovies = async (search = 'The godfather') => {
  if (search.length < 3) {
    return;
  }
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  const { Error, Search: movies, totalResults: totalCount } = response;
  
  return { movies, totalCount, Error: Error ?? '' };
}


function App() {
     
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');

  const callApi = async (search = '') => {

    const data = await fetchMovies(search);
    console.log(data)
   setError(data.Error);
   
   if (!data.Error.length) {
     setMovies(data.movies);
     setTotalCount(data.totalCount);
   } else {
     setTotalCount(0);
     setMovies([]);
   }
    }
  useEffect(() => {
   
    callApi('Godfather');
    return () => {
     
    }
  }, []);

  return (
    <>
      <Navbar onSearchChange={callApi }/>
    <div className="App container-fluid">
      <header className="App-header">
        <h1> MY FAVORITE MOVIES ({totalCount})</h1>
      
        </header>
        {
          !error ? <MovieList movies={movies} /> : <h2>{ error}</h2>
        } 
      </div>
      </>
  );
}

export default App;
