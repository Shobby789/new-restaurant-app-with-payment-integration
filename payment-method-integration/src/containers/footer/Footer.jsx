import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { PiTwitterLogoLight } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import footerImg from "../../assets/hero-img.png";

const Footer = () => {
  return (
    <div className="container-fluid py-5 border-top position-relative overflow-hidden">
      <img src={footerImg} alt="" className="footer-img" />
      <div className="container pt-3">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <Link
              to="/"
              className="fs-2 yellow-text text-decoration-none fw-semibold"
            >
              foodie
            </Link>
            <p className="text-small text-grey my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, non.
            </p>
            <ul className="footer-external-links mt-3">
              <li className="mx-1">
                <Link to="">
                  <TiSocialFacebook className="fs-5" />
                </Link>
              </li>
              <li className="mx-1">
                <Link to="">
                  <PiTwitterLogoLight className="fs-5" />
                </Link>
              </li>
              <li className="mx-1">
                <Link to="">
                  <LiaLinkedinIn className="fs-5" />
                </Link>
              </li>
              <li className="mx-1">
                <Link to="">
                  <IoLogoInstagram className="fs-5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
            <h6 className="fw-semibold">Opening Hours</h6>
            <p className="text-small text-grey mt-4">
              Mon - Fri 9:00 AM - 8:00 PM
            </p>
            <p className="text-small text-grey">Saturday 9:00 AM - 4:00 PM</p>
            <p className="text-small text-grey">Sunday - Closed</p>
          </div>

          <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
            <h6 className="fw-semibold">Contact us</h6>
            <p className="text-small text-grey mt-4">Karachi, Sindh Pakistan</p>
            <p className="text-small text-grey">+123 4567 8910</p>
            <p className="text-small text-grey">foodie1996@gmail.com</p>
          </div>

          <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
            <h6 className="fw-semibold">Subscribe us</h6>
            <div className="mt-4 px-0">
              <input
                type="email"
                className="form-control mb-3 text-small p-3 text-grey rounded-5 subscribe-input"
                placeholder="Enter your email"
              />
              <button className="w-100 py-2 fw-semibold text-small rounded-5 subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
