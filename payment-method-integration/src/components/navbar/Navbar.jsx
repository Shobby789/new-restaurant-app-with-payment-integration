import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const items = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Adjust 100 to your desired scroll position
      setScrolling(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? "white" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <nav
        className={
          scrolling
            ? "navbar navbar-expand-md fixed-top ps-0 white"
            : "navbar navbar-expand-md fixed-top ps-0 transparent"
        }
        style={navbarStyle}
      >
        <div className="container-fluid px-3 px-lg-5">
          <Link
            className="navbar-brand me-auto fw-bold fs-3 yellow-text"
            to="/"
          >
            foodie
          </Link>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bold fs-3 yellow-text"
                id="offcanvasNavbarLabel"
              >
                foodie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-lg-2 text-dark fw-medium text-medium"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3 text-dark fw-medium text-medium"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3 text-dark fw-medium text-medium"
                    to="/menu"
                  >
                    Menu
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3 text-dark fw-medium text-medium"
                    to="/my-orders"
                  >
                    My Orders
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3 text-dark fw-medium text-medium"
                    to="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/cart" className="fs-3 text-dark cart-icon me-lg-3 me-sm-2">
            <IoCartOutline />
          </Link>
          <Link
            to="/login"
            className="btn btn-dark rounded-2 text-small px-3 mx-2"
          >
            Login
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <i className="bi bi-filter-right fw-bold text-dark"></i> */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
