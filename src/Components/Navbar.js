import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <span className=" fs-3 fw-bold">
          <i className="fas fa-clipboard-list"></i>
            <span> Digital Token Generation</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-lg-0 ">
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                
                    {/* <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/services" style={{ textDecoration: "none" }}>
                    Services
                  </Link>
                </li> */}

    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5 mx-2 py-1 px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item"><Link to="/services" style={{ textDecoration: "none" }}>
                    Aadhar Card
                  </Link></a></li>
            <li><a className="dropdown-item"><Link to="/services" style={{ textDecoration: "none" }}>
                    Income Certificate
                  </Link></a></li>
           
            <li><a className="dropdown-item"><Link to="/services" style={{ textDecoration: "none" }}>
                    Caste Certificate
                  </Link></a></li>
          </ul>
        </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/Contact" style={{ textDecoration: "none" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
