import React from "react";

const Cancel = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-5" style={{ width: "16rem" }}>
        <p className="text-danger fs-3 fw-bold text-center">
          Order could not be placed
        </p>
      </div>
    </div>
  );
};

export default Cancel;
