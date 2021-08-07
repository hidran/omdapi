

import './App.css';
import {useState, useEffect} from 'react';
const APIKEY = '4cb9def9';



const APIURL = 'https://www.omdbapi.com';

const fetchMovies = async (search = 'The godfather') => {
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  const { Search: movies, totalResults: totalCount } = response;
  console.log(response);
  return { movies, totalCount };
}


function App() {
     
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const callApi = async () => {
      const data = await fetchMovies();
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    }
    callApi();
    return () => {
     
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> MY FAVORITE MOVIES</h1>
        <ul>
          {movies.map(movie => <li key={movie.imbID}>{ movie.Title}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
