
import React, { useState } from 'react';

export const SearchBar = ({ onSearchChange }) => {

        const [search, setSearch] = useState('');
    const manageSearch = (evt) => {
      
        
        const s = evt.target.value.trim();
        setSearch(s);
        
       
    }
    const searchMovies = (evt) =>{
        evt.preventDefault();
         if (search.length > 3) {
            onSearchChange(search)
        }
    }


    return (<form className="d-flex">
        <input className="form-control me-2"
            name ="search" value={search} onChange = {manageSearch}
            type="search" placeholder="Search" aria-label="Search" />
        <button  onClick = {searchMovies} className="btn btn-outline-success" type="submit">Search</button>
         <button onClick ={()=> {setSearch('')}} className="btn btn-outline-info" type="reset">Reset</button>
    </form>);
}
