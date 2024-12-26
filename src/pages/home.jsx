import React from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
      <>
      {/* Navbar Start */}
      {/* Navbar End */}
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase animated bounceInDown">
                    Best Security Services
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Safe &amp; Secure Home For Your Family
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Get Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase animated bounceInDown">
                    Best Security Services
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Safe &amp; Secure Home For Your Family
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Get Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase animated bounceInDown">
                    Best Security Services
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Safe &amp; Secure Home For Your Family
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Get Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
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
            <h1 className="display-5 mb-0">Our Excellent CCTV Security Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                  <i className="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3" />
                  <h5 className="text-primary mb-0">CCTV</h5>
                  <h3 className="mb-3">Installation</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
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
      {/* Pricing Plan Start */}
      <div
        className="container-fluid py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginBottom: 75 }}
      >
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Pricing Plan
            </h5>
            <h1 className="display-5 mb-0">
              Pricing Plan For CCTV Security Services
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="position-relative border border-primary rounded">
                <div className="bg-primary text-center pt-5 pb-4">
                  <h3 className="text-white">Basic Plan</h3>
                  <h1 className="display-4 text-white" style={{ height: '60px'}}>
                    <small
                      className="align-top"
                      style={{ fontSize: 22, lineHeight: 45 }}
                    >
                      $
                    </small>
                    49
                    <small
                      className="align-bottom"
                      style={{ fontSize: 16, lineHeight: 40 }}
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
                <div className="text-center py-5">
                  <p className="border-bottom border-light mb-2 pb-2">
                    HTML5 &amp; CSS3
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Bootstrap v5
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Responsive Layout
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Browsers Compatibility
                  </p>
                  <p className="mb-2 pb-2">Easy to Use</p>
                </div>
                <a
                  href=""
                  className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="position-relative border border-secondary rounded">
                <div className="bg-secondary text-center pt-5 pb-4">
                  <h3 className="text-white">Standard Plan</h3>
                  <h1 className="display-4 text-white" style={{ height: '60px'}}>
                    <small
                      className="align-top"
                      style={{ fontSize: 22, lineHeight: 45 }}
                    >
                      $
                    </small>
                    49
                    <small
                      className="align-bottom"
                      style={{ fontSize: 16, lineHeight: 40 }}
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
                <div className="text-center py-5">
                  <p className="border-bottom border-light mb-2 pb-2">
                    HTML5 &amp; CSS3
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Bootstrap v5
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Responsive Layout
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Browsers Compatibility
                  </p>
                  <p className="mb-2 pb-2">Easy to Use</p>
                </div>
                <a
                  href=""
                  className="btn btn-secondary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="position-relative border border-primary rounded">
                <div className="bg-primary text-center pt-5 pb-4">
                  <h3 className="text-white">Extended Plan</h3>
                  <h1 className="display-4 text-white" style={{ height: '60px'}}>
                    <small
                      className="align-top"
                      style={{ fontSize: 22, lineHeight: 45 }}
                    >
                      $
                    </small>
                    49
                    <small
                      className="align-bottom"
                      style={{ fontSize: 16, lineHeight: 40 }}
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
                <div className="text-center py-5">
                  <p className="border-bottom border-light mb-2 pb-2">
                    HTML5 &amp; CSS3
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Bootstrap v5
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Responsive Layout
                  </p>
                  <p className="border-bottom border-light mb-2 pb-2">
                    Browsers Compatibility
                  </p>
                  <p className="mb-2 pb-2">Easy to Use</p>
                </div>
                <a
                  href=""
                  className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}
      {/* Offer Start */}
      <div
        className="container-fluid bg-offer my-5 py-5 wow zoomIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="text-center mx-auto mb-4" style={{ maxWidth: 600 }}>
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
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos
                vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut
                dolores magna sit. Sea dolore sed et.
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
              <div className="bg-secondary text-center rounded-bottom p-4">
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
              <div className="bg-secondary text-center rounded-bottom p-4">
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
              <div className="bg-secondary  text-center rounded-bottom p-4">
                <h3 className="text-white">Full Name</h3>
                <p className="text-white m-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
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
            <h1 className="display-5 mb-0">What People Say About Our Services</h1>
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
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                  stet amet eirmod eos labore diam
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
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                  stet amet eirmod eos labore diam
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
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                  stet amet eirmod eos labore diam
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
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                  stet amet eirmod eos labore diam
                </p>
                <h4 className="text-truncate">Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Blog Post
            </h5>
            <h1 className="display-5 mb-0">Latest Articles From Our Blog Post</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <div className="blog-item">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src="img/blog-1.jpg"
                    alt=""
                  />
                  <div className="blog-date">
                    <h5 className="text-white fw-bold mb-0">01</h5>
                    <h6 className="text-light mb-0">January</h6>
                  </div>
                </div>
                <div className="bg-primary rounded-bottom p-5">
                  <div className="d-flex mb-3">
                    <span className="text-light text-uppercase">Admin</span>
                    <span className="text-light px-2">|</span>
                    <span className="text-light text-uppercase">Web Design</span>
                  </div>
                  <a className="h3 m-0 text-white" href="">
                    Kasd dolor lorem sit justo rebum stet justo elitr dolor amet sit
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <div className="blog-item">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src="img/blog-2.jpg"
                    alt=""
                  />
                  <div className="blog-date">
                    <h5 className="text-white fw-bold mb-0">01</h5>
                    <h6 className="text-light mb-0">January</h6>
                  </div>
                </div>
                <div className="bg-primary rounded-bottom p-5">
                  <div className="d-flex mb-3">
                    <span className="text-light text-uppercase">Admin</span>
                    <span className="text-light px-2">|</span>
                    <span className="text-light text-uppercase">Web Design</span>
                  </div>
                  <a className="h3 m-0 text-white" href="">
                    Kasd dolor lorem sit justo rebum stet justo elitr dolor amet sit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
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
}

export default Home;
