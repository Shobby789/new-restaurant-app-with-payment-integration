import React from "react";
import "./AboutUs.css";
import aboutUsImg from "../../assets/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 ps-lg-3">
            <img src={aboutUsImg} alt="" className="img-fluid about-us-img" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 px-1 pe-lg-3">
            <h2 className="fw-bold mb-3 about-heading">
              About <span className="yellow-text">Us</span>
            </h2>
            <p className="text-grey text-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit laboriosam sit assumenda inventore, commodi autem quae
              itaque maxime similique sunt consequuntur vitae expedita quos enim
              incidunt quam? Accusantium, nemo?
            </p>
            <button className="px-3 py-2 rounded-2 fw-semibold about-btn">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
