import React, { useEffect, useState } from "react";
import "./CartForm.css";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalAmount,
  removeAllItems,
} from "../../redux/cartSlice/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

const CartForm = ({ totalAmount }) => {
  const [userData, setUserData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  const titles = ["Order Summary", "Shipping Info", "Payment Info"];
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(0);
  const handleNext = () => {
    setTitle(title + 1);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems, dispatch]);

  const renderStep = () => {
    switch (title) {
      case 0:
        return <OrderSummary amount={parseInt(cartItems?.cartTotalAmount)} />;
      case 1:
        return <ShippingInfo />;
      case 2:
        return <PaymentInfo />;
      default:
        return null;
    }
  };

  const placeOrderHandler = async () => {
    const stripe = await loadStripe(
      "pk_test_51OyvorBEJbyBfiqfeh5m47kbjAqdhUzzkFRBNGwGMf4jHYyzlkgLmDCYsHOkP3YuAxbo9ZXJHGoBFwducz9ATi4x00rxKcBaIX"
    );

    const body = {
      products: cartItems,
      user: userData,
    };

    const response = await fetch("http://localhost:3001/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("Payment error >> ", error);
    }
    dispatch(removeAllItems());
  };

  return (
    <div className="container px-0 h-75 mx-auto d-flex flex-column justify-content-between pt-3 pb-5">
      <div className="mb-3">
        <h5 className="fw-semibold">{titles[title]}</h5>
      </div>

      <PaymentInfo
        onclick={placeOrderHandler}
        data={userData}
        handleOnChange={handleOnChange}
      />

      {/* <div className="container w-100 px-0 pb-3">
        <button
          className="w-100 py-2 fw-medium text-medium cart-btn text-light border-0"
          onClick={title < 2 ? handleNext : placeOrderHandler}
        >
          {title < 2 ? <span>Next</span> : <span>Place Order</span>}
        </button>
      </div> */}
    </div>
  );
};

export default CartForm;

const OrderSummary = ({ amount }) => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <div className="d-flex justify-content-between border-bottom mb-3">
        <p className="text-medium fw-medium">Items</p>
        <p className="text-medium fw-medium">{cartItems?.cartTotalQuantity}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom mb-3">
        <p className="text-medium fw-medium">Sub Total</p>
        <p className="text-medium fw-medium">${parseInt(amount)}.00</p>
      </div>
      <div className="d-flex justify-content-between border-bottom mb-3">
        <p className="text-medium fw-medium">Delivery Charges</p>
        <p className="text-medium fw-medium">$5.00</p>
      </div>
      <div className="d-flex justify-content-between border-bottom mb-4">
        <p className="text-medium fw-medium">Total</p>
        <p className="text-medium fw-medium">${amount + 5}.00</p>
      </div>
    </>
  );
};

const ShippingInfo = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Full Name
        </label>
        <input
          type="text"
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Email Address
        </label>
        <input
          type="email"
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Complete Address
        </label>
        <input
          type="text"
          className="form-control text-medium py-2 text-grey"
        />
      </div>
    </>
  );
};

const PaymentInfo = ({ onclick, data, handleOnChange }) => {
  return (
    <>
      <div className="mb-3">
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label ms-2 tex-medium fw-medium"
            htmlFor="flexRadioDefault1"
          >
            <BsCreditCard2FrontFill className="fs-5" />
            <span className="ms-1">Credit Card</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label ms-2 tex-medium fw-medium"
            htmlFor="flexRadioDefault2"
          >
            <FaCcPaypal className="fs-5" />
            <span className="ms-1">PayPal</span>
          </label>
        </div>
      </div>
      <div className="my-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Name on Card
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleOnChange}
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleOnChange}
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-medium fw-medium">
          CVC Number
        </label>
        <input
          type="text"
          name="cvc"
          value={data.cvc}
          onChange={handleOnChange}
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label text-medium fw-medium">
          Expiration Date
        </label>
        <input
          type="date"
          name="expiryDate"
          value={data.expiryDate}
          onChange={handleOnChange}
          className="form-control text-medium py-2 text-grey"
        />
      </div>
      <div className="container w-100 px-0 pb-3">
        <button
          className="w-100 py-2 fw-medium text-medium cart-btn text-light border-0"
          onClick={() => onclick()}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
