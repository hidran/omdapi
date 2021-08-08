export default function MovieDetail({ movie, error }) {
  
    return (

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            {movie?.Title}
                        
                        </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                        {movie?.Plot}
                            {error}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</button>
           
            </div>
          </div>
        </div>
      </div>
    );
  }