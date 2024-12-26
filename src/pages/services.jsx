import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Navbar Start */}
      {/* Navbar End */}
      {/* Hero Start */}
      <div className="container-fluid bg-primary p-5 hero-header mb-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-1 text-white animated zoomIn">Service</h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href="" className="h4 text-white">
              Service
            </a>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Services Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Services
            </h5>
            <h1 className="display-5 mb-0">
              Our Excellent CCTV Security Services
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Installation</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-surveillance d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Configuration</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-camera d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Maintenance</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-double d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Repair &amp; Service</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-security-system d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Monitoring</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-recorder d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Access Control</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Offer Start */}
      <div
        className="container-fluid bg-offer my-5 py-5 wow zoomIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="text-center mx-auto mb-4"
                style={{ maxWidth: 600 }}
              >
                <h5
                  className="text-white text-uppercase"
                  style={{ letterSpacing: 5 }}
                >
                  Special Offer
                </h5>
                <h1 className="display-5 text-white">
                  Save 50% On All Items Your First Order
                </h1>
              </div>
              <p className="text-white mb-4">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </p>
              <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
                Order Now
              </a>
              <a href="" className="btn btn-secondary py-md-3 px-md-5">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}
      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Testimonial
            </h5>
            <h1 className="display-5 mb-0">
              What People Say About Our Services
            </h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center pb-4">
              <img
                className="img-fluid mx-auto rounded-circle"
                src="img/testimonial-1.jpg"
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text bg-light rounded p-4 mt-n5">
                <p className="mt-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <h4 className="text-truncate">Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto rounded-circle"
                src="img/testimonial-2.jpg"
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text bg-light rounded p-4 mt-n5">
                <p className="mt-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <h4 className="text-truncate">Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto rounded-circle"
                src="img/testimonial-3.jpg"
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text bg-light rounded p-4 mt-n5">
                <p className="mt-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <h4 className="text-truncate">Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto rounded-circle"
                src="img/testimonial-4.jpg"
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text bg-light rounded p-4 mt-n5">
                <p className="mt-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <h4 className="text-truncate">Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      {/* Footer End */}
      {/* Back to Top */}
      <Link
        href="#"
        className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
};

export default Services;
