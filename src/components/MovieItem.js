const MovieItem = ({movie, onSelectMovie}) => {

    return (
        <div className="card m-2 col-md-3 col-lg-6" style={{width: '18rem'}}>
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          
        </div>
        <div className="card-footer">
          <buton onClick={() => {onSelectMovie(movie)} } data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="btn btn-primary">VIEW DETAIL</buton>
            </div>
      </div>
    );

}
export default MovieItem