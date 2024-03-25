import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartForm from "../../components/cartform/CartForm";
import { HiArrowNarrowLeft } from "react-icons/hi";
import {
  addToCart,
  calculateTotalAmount,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  console.log("cartItems >> ", cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems, dispatch]);

  return (
    <div className="container-fluid pt-5 pb-5 mb-5">
      <div className="container px-0">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="container pt-5 pb-3">
              <Link
                to="/"
                className="text-decoration-none text-dark fw-medium text-medium icon-link icon-link-hover"
              >
                <HiArrowNarrowLeft />
                Go back
              </Link>
            </div>
            <table className="cart-table text-center">
              <thead>
                <tr className="border-bottom">
                  <th className="py-3">Product</th>
                  <th className="py-3">Title</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total Price</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.length > 0 ? (
                  <>
                    {cartItems.map(
                      ({
                        id,
                        title,
                        quantity,
                        price,
                        imageUrl,
                        cartQuantity,
                      }) => {
                        return (
                          <tr className="border-bottom" id={id} key={id}>
                            <td className="py-3">
                              <img
                                src={imageUrl}
                                alt=""
                                className="cart-item-img"
                              />
                            </td>
                            <td className="py-3">{title}</td>
                            <td>${price}.00</td>
                            <td className="py-3">
                              <button
                                className="btn border-0 outline-none btn-sm py-0"
                                onClick={() =>
                                  dispatch(decrementQuantity({ id, title }))
                                }
                              >
                                -
                              </button>{" "}
                              <span className="mx-1">{cartQuantity}</span>{" "}
                              <button
                                className="btn border-0 outline-none btn-sm py-0"
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      id,
                                      title,
                                      price,
                                      imageUrl,
                                      cartQuantity,
                                    })
                                  )
                                }
                              >
                                +
                              </button>
                            </td>
                            <td className="py-3 text-center">${price}.00</td>
                            <td className="py-3">
                              <button
                                type="button"
                                className="btn-close text-small"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                                onClick={() =>
                                  dispatch(
                                    removeItem({
                                      id,
                                      title,
                                      quantity,
                                      price,
                                      imageUrl,
                                    })
                                  )
                                }
                              ></button>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center pt-3">
            <CartForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
