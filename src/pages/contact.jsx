import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
  {/* Navbar Start */}
  {/* Navbar End */}
  {/* Hero Start */}
  <div className="container-fluid bg-primary p-5 hero-header mb-5">
    <div className="row py-5">
      <div className="col-12 text-center">
        <h1 className="display-1 text-white animated zoomIn">Contact</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Contact Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h5
          className="text-primary text-uppercase"
          style={{ letterSpacing: 5 }}
        >
          Contact Us
        </h5>
        <h1 className="display-5 mb-0">Please Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-7 wow slideInUp" data-wow-delay="0.3s">
          <div className="bg-light rounded p-5">
            <form>
              <div className="row g-3">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control border-0 px-4"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className="form-control border-0 px-4"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control border-0 px-4"
                    placeholder="Subject"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 px-4 py-3"
                    rows={8}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 wow slideInUp" data-wow-delay="0.6s">
          <div className="bg-light rounded p-5">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-geo-alt fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-1">Our Office</h5>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-1">Email Us</h5>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-1">Call Us</h5>
                <span>+012 345 6789</span>
              </div>
            </div>
            <div>
              <iframe
                className="position-relative w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ height: 230, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <Link
    to="#"
    className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </Link>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>
);
}

export default Contact;
