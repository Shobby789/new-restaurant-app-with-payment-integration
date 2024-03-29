import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = await response.json();
      console.log("login res >> ", res);
      toast.success(res.message);
      navigate("/");
    } else {
      toast.error(res.message);
    }

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleOnSubmit} className="rounded-3 p-5 auth-form">
        <h3 className="fw-semibold text-center mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter your email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="form-control py-2 text-secondary"
          />
          {/* {data.email === "" ? (
            <div className="form-text text-danger">
              Enter a valid email address
            </div>
          ) : (
            <></>
          )} */}
        </div>
        <div className="input-group mb-4">
          <label htmlFor="email" className="form-label">
            Enter your password
          </label>
          <div className="w-100 d-flex position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="form-control py-2 text-secondary"
            />
            <span
              className="input-group-text border-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOutline className="fs-5 text-secondary" />
              ) : (
                <IoEyeOffOutline className="fs-5 text-secondary" />
              )}
            </span>
          </div>
          {/* <div className="form-text text-danger">Enter correct password</div> */}
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-warning w-100 fw-medium py-2"
          >
            Login
          </button>
        </div>
        <div className="text-center pt-3">
          <p className="text-small">
            Don't have an account?{" "}
            <Link to="/register" className="ms-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
