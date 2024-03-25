import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartForm from "./components/cartform/CartForm";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.items);
  console.log("cartItems >> ", cartItems);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Link to="/">Go back</Link>
      </div>
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.length > 0 ? (
                <>
                  {cartItems.map(({ id, title, quantity, price, imageUrl }) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={imageUrl}
                            alt=""
                            className="cart-item-img"
                          />
                        </td>
                        <td>{title}</td>
                        <td>${price}.00</td>
                        <td>
                          <button className="quantity-btn">-</button>{" "}
                          <span className="quantity">{quantity}</span>{" "}
                          <button className="quantity-btn">+</button>
                        </td>
                        <td>${price * quantity}.00</td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <div className="cart-checkout-details border-start d-flex align-items-center pt-5">
          <CartForm />
        </div>
      </div>
    </>
  );
};

export default Cart;
