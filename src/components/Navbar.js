import { Menu } from './Menu'
import { SearchBar } from './SearchBar'

export const Navbar = (params) => {
    return (
         <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
                    <Menu />
                    <SearchBar></SearchBar>
          </div>
        </nav>
      </header>
    );
}
