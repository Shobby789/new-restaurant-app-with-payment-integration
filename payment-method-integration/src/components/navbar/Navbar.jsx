import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3 text-dark fw-medium text-medium"
                    to="/my-orders"
                  >
                    My Orders
                  </Link>
                </li>
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
          <Link to="/cart" className="fs-3 text-dark cart-icon me-lg-3">
            <IoCartOutline />
          </Link>
          <Link
            to="/login"
            className="btn btn-dark rounded-5 text-small px-3 ms-lg-2"
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
    // <nav
    //   classNameName={
    //     scrolling
    //       ? "navbar navbar-expand-md fixed-top ps-lg-5 pe-lg-3 white"
    //       : "navbar navbar-expand-md fixed-top ps-lg-5 pe-lg-3 transparent"
    //   }
    //   style={navbarStyle}
    // >
    //   <div classNameName="container-fluid">
    //     <Link classNameName="navbar-brand fw-semibold fs-3 yellow-text" to="/">
    //       foodie
    //     </Link>
    //     <div
    //       classNameName="offcanvas offcanvas-end"
    //       tabindex="-1"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //     >
    //       <div classNameName="offcanvas-header">
    //         <h5
    //           classNameName="offcanvas-title fw-semibold fs-3 yellow-text"
    //           id="offcanvasNavbarLabel"
    //         >
    //           foodie
    //         </h5>
    //         <button
    //           type="button"
    //           classNameName="btn-close"
    //           data-bs-dismiss="offcanvas"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div classNameName="offcanvas-body">
    //         <ul classNameName="navbar-nav justify-content-end flex-grow-1 pe-3">
    //           <li classNameName="nav-item mx-md-2 mx-lg-3">
    //             <Link
    //               classNameName="nav-link active fw-medium"
    //               aria-current="page"
    //               to="/"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item mx-md-2 mx-lg-3">
    //             <Link classNameName="nav-link fw-medium" to="/about">
    //               About
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item mx-md-2 mx-lg-3">
    //             <Link classNameName="nav-link fw-medium" to="/menu">
    //               Menu
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item mx-md-2 mx-lg-3">
    //             <Link classNameName="nav-link fw-medium" to="my-orders">
    //               My Orders
    //             </Link>
    //           </li>
    //           <li classNameName="nav-item mx-md-2 mx-lg-3">
    //             <Link classNameName="nav-link fw-medium" to="/contact">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <Link to="/cart" classNameName="cart-icon">
    //       <IoCartOutline classNameName="fs-4" />
    //     </Link>
    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasNavbar"
    //       aria-controls="offcanvasNavbar"
    //       aria-label="Toggle navigation"
    //     >
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>
    //   </div>
    // </nav>
  );
};

export default Navbar;
