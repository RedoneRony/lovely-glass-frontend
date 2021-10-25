import React from "react";
import "./Footer.css";
import { Form, Button, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import image from "../../assets/images/enric-moreu-rIymmvOq3P8-unsplash.jpg";
function Footer() {
  return (
    // footer design
    <div className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, Dhaka</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src={image} alt="Second slide" />
                </div>
                <div className="footer-text">
                  <p>
                    Doctors Hub Are A Medical And Health Department Provider
                    Institutions. Suitable For Healthcare, Medical, Doctor,
                    Dental, Dentist, Pharmacy, Health And Any Related Medical
                    Care Field.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <NavLink href="#">Home</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">about</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">services</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">About us</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Our Services</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Expert Team</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Latest News</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <Form>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Button>
                      <FontAwesomeIcon icon={faPlane} />
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2021, All Right Reserved</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink href="#">Home</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Terms</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Privacy</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Policy</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
