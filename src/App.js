

import './App.css';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import { Navbar } from './components/Navbar';
import MovieDetail from './components/MovieDetail';
import { fetchMovieById, fetchMovies} from './utils';




function App() {
   
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = async (movie) => {
    setSelectedMovie(movie);
    const newMovie = await fetchMovieById(movie.imdbID);
     if (newMovie.Error) {
       setErrorDetail(newMovie.Error);
        setSelectedMovie(null); 
     } else {
       setSelectedMovie(newMovie); 
     }
   
  };
  const callApi = async (search = '') => {

    const data = await fetchMovies(search);
    console.log(data)
   setError(data.Error);
   
   if (!data.Error.length) {
     setMovies(data.movies);
     setSelectedMovie(data.movies[0])
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
          !error ? <MovieList onSelectMovie={selectMovie} movies={movies} /> : <h2>{ error}</h2>
        }
        
        <MovieDetail error = {errorDetail} movie={selectedMovie }/>
      </div>
      </>
  );
}

export default App;
