import React from "react";
import Header from "../../common/header/Header";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Header heading={"Contact Us"} text={"Know More About Us"} />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="row mb-1">
                <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-start jutify-content-center pt-1">
                  <IoHomeOutline className="yellow-text fs-2 d-block" />
                </div>
                <div className="col-sm-9 col-md-10 col-lg-10 d-flex flex-column">
                  <p className="text-medium mb-1">Binghamton, New York</p>
                  <p className="text-small text-grey">
                    4343 Hinkle Deegan Lake Road
                  </p>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-start jutify-content-center pt-1">
                  <IoCallOutline className="yellow-text fs-2 d-block" />
                </div>
                <div className="col-sm-9 col-md-10 col-lg-10 d-flex flex-column">
                  <p className="text-medium mb-1">00 (958) 9865 562</p>
                  <p className="text-small text-grey">
                    Mon to Fri 9 am to 6 pm
                  </p>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-start jutify-content-center pt-1">
                  <HiOutlineMail className="yellow-text fs-2 d-block" />
                </div>
                <div className="col-sm-9 col-md-10 col-lg-10 d-flex flex-column">
                  <p className="text-medium mb-1">foodie@gmail.com</p>
                  <p className="text-small text-grey">
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control py-3 px-3 text-small text-grey"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control py-3 px-3 text-small text-grey"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control py-3 px-3 text-small text-grey"
                  placeholder="Enter Subject"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                className="form-control p-3 text-small text-grey"
                placeholder="Enter Message"
              ></textarea>
              <div className="mt-3 text-end pt-3">
                <button className="btn btn-dark fw-medium text-medium px-3 px-lg-5 rounded-2">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
