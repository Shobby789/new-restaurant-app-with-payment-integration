import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card py-5 text-center" style={{ width: "20rem" }}>
        <div className="text-center">
          <AiFillDollarCircle className="fs-1 text-success mb-3" />
        </div>
        <p className="text-success fs-5 fw-bold text-center">
          Payment Successful
        </p>
        <p className="text-grey">Order placed successfully</p>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Success;
