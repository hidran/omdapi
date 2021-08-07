export const Menu = (params) => {
    return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/movies">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/series" tabIndex={-1} aria-disabled="true">Disabled</a>
                </li>
            </ul>
             
        </div>);
}
