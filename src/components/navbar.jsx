import React  from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand ms-lg-5">
          <h1 className="display-5 m-0 text-primary">
          Berimbolo <span className="text-secondary">Security</span>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link> 
            <Link to="/About" className="nav-item nav-link">
              About
            </Link> 
            <Link to="/Services" className="nav-item nav-link">
              Service
            </Link> 
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link> 
              <div className="dropdown-menu m-0">
                {/* <Link href="price.html" className="dropdown-item">
                  Pricing Plan
                </Link> 
                <Link href="blog.html" className="dropdown-item">
                  Blog Grid
                </Link> 
                <Link href="detail.html" className="dropdown-item">
                  Blog Detail
                </Link> 
                <Link href="team.html" className="dropdown-item">
                  The Team
                </Link> 
                <Link href="testimonial.html" className="dropdown-item">
                  Testimonial
                </Link>  */}
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link> 
            <Link
              href="tel:+123456789"
              className="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"
            >
              <i className="bi bi-telephone-outbound me-2" />
              +123 456 789
            </Link> 
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}
export default Navbar;
