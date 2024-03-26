import React from "react";
import "./Header.css";
import image from "../../assets/hero-img.png";

const Header = ({ heading, text }) => {
  return (
    <div className="common-header">
      <div className="common-header-left d-flex flex-column justify-content-center align-items-start">
        <h1 className="fw-bold common-header-heading">{heading}</h1>
        <p className="yellow-text text-medium fw-medium ps-1">{text}</p>
      </div>
      <div className="common-header-right d-flex justify-content-center align-items-center">
        <img src={image} alt="" className="w-75" />
      </div>
    </div>
  );
};

export default Header;
