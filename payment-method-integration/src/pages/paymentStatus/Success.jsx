import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* <p className="text-dark fs-5 fw-bold text-center">Payment Successful</p> */}
      <p className="text-dark fs-5 fw-semibold">
        Your order has been placed successfully.
      </p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Success;
