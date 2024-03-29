import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log("register data >> ", data);

    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = await response.json();
      console.log("register res >> ", res);
      toast.success("Registered Successfully!");
      navigate("/login");
    } else {
      toast.error("Error Occurred! Please try again later.");
    }

    setData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid py-5 min-vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleOnSubmit} className="rounded-3 p-5 auth-form">
        <h3 className="fw-semibold text-center mb-4">Create Account</h3>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter your Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            className="form-control py-2"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter your email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="form-control py-2"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter phone number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleOnChange}
            className="form-control py-2"
            placeholder="+92 123 4567 890"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Create a password
          </label>
          <div className="w-100 d-flex position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="form-control py-2 text-secondary"
              placeholder="Create a strong password"
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
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-warning py-2 w-100 fw-medium"
          >
            Register
          </button>
        </div>
        <div className="text-center pt-3">
          <p className="text-small">
            Already have an account?{" "}
            <Link to="/login" className="ms-1">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
