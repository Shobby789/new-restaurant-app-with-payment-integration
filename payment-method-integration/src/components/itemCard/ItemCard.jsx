import React from "react";
import "./ItemCard.css";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ id, imageUrl, title, description, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="card item-card border-0 mb-3"
        key={id}
        id={id}
        style={{ width: "18rem" }}
      >
        <img src={imageUrl} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-grey text-medium">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-semibold">${price}.00</p>
            <button
              className="border-0 px-3 py-1 text-small rounded-5 yellow-btn"
              onClick={() =>
                dispatch(addToCart({ id, title, description, price, imageUrl }))
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
