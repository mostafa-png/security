import React from 'react';
import Navbar from '../components/navbar';

const About = () => {
    return (
        <>
  {/* Navbar Start */}
  {/* Navbar End */}
  {/* Hero Start */}
  <div className="container-fluid bg-primary p-5 hero-header mb-5">
    <div className="row py-5">
      <div className="col-12 text-center">
        <h1 className="display-1 text-white animated zoomIn">About Us</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          About
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.3s"
              src="img/about.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="mb-4">
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              About Us
            </h5>
            <h1 className="display-5 mb-0">
              We Offers Quality CCTV Systems &amp; Services
            </h1>
          </div>
          <h4 className="text-body fst-italic mb-4">
            Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
            sit clita duo justo magna dolore
          </h4>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet et magna
          </p>
          <div className="row g-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                style={{ height: 200 }}
              >
                <i className="fa fa-star fa-4x text-white mb-4" />
                <h4 className="text-white mb-0">15 Years Experience</h4>
              </div>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.9s">
              <div
                className="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                style={{ height: 200 }}
              >
                <i className="fa fa-award fa-4x text-white mb-4" />
                <h4 className="text-white mb-0">Award Winning</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h5
          className="text-primary text-uppercase"
          style={{ letterSpacing: 5 }}
        >
          Team Members
        </h5>
        <h1 className="display-5 mb-0">Our Professional Team Members</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="position-relative rounded-top">
            <img
              className="img-fluid rounded-top w-100"
              src="img/team-1.jpg"
              alt=""
            />
            <div
              className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
              style={{ marginRight: "-25px" }}
            >
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
          <div className="bg-primary text-center rounded-bottom p-4">
            <h3 className="text-white">Full Name</h3>
            <p className="text-white m-0">Designation</p>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="position-relative rounded-top">
            <img
              className="img-fluid rounded-top w-100"
              src="img/team-2.jpg"
              alt=""
            />
            <div
              className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
              style={{ marginRight: "-25px" }}
            >
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
          <div className="bg-primary text-center rounded-bottom p-4">
            <h3 className="text-white">Full Name</h3>
            <p className="text-white m-0">Designation</p>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="position-relative rounded-top">
            <img
              className="img-fluid rounded-top w-100"
              src="img/team-3.jpg"
              alt=""
            />
            <div
              className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
              style={{ marginRight: "-25px" }}
            >
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-outline-secondary btn-square m-1" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
          <div className="bg-primary text-center rounded-bottom p-4">
            <h3 className="text-white">Full Name</h3>
            <p className="text-white m-0">Designation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>
    );
}

export default About;
