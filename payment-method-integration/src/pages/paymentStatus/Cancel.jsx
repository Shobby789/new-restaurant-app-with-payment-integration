import React from "react";

const Cancel = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* <p className="text-dark fs-5 fw-bold text-center">Payment Successful</p> */}
      <p className="text-dark fs-3 fw-semibold">Oops!</p>
      <p className="text-dark fs-5 fw-semibold">
        Order could not be placed due to some error.
      </p>
    </div>
  );
};

export default Cancel;
