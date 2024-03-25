import React from "react";
import "./Quality.css";
import { PiBowlFoodLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { PiPersonSimpleBikeDuotone } from "react-icons/pi";

const Quality = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-3">
        <h2 className="text-center fw-bold">
          Why Choose Our <span className="yellow-text">Food</span>
        </h2>
      </div>

      <div className="container d-flex justify-content-center flex-wrap gap-3 gap-lg-5 pt-5">
        <div className="card quality-card rounded-3 py-4 ps-4 border-0 mb-3">
          <span className="quality-card-img mb-4">
            <BiDish className="yellow-text fs-1" />
          </span>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-3">Quality Food</h5>
            <p className="card-text text-grey text-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ducimus!
            </p>
          </div>
        </div>

        <div className="card quality-card rounded-3 py-4 ps-4 border-0 mb-3">
          <span className="quality-card-img mb-4">
            <PiBowlFoodLight className="yellow-text fs-1" />
          </span>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-3">Super Taste</h5>
            <p className="card-text text-grey text-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ducimus!
            </p>
          </div>
        </div>

        <div className="card quality-card rounded-3 py-4 ps-4 border-0 mb-3">
          <span className="quality-card-img mb-4">
            <PiPersonSimpleBikeDuotone className="yellow-text fs-1" />
          </span>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-3">Fast Delivery</h5>
            <p className="card-text text-grey text-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ducimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
