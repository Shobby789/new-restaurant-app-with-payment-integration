import "./Hero.css";
import heroImg from "../../assets/hero-img.png";

export default function Hero() {
  return (
    <>
      <div className="custom-hero">
        <div className="hero-text d-flex flex-column justify-content-center align-items-start gap-0 gap-lg-3">
          <h6 className="yellow-text fw-semibold mb-3">_Restaurant</h6>
          <h1 className="fw-bold">Find the Best Food in Your Home Town</h1>
          <p className="text-grey mt-1 mb-3 text-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            veniam in ipsam labore accusantium distinctio ex temporibus dolorem,
            doloribus aperiam!
          </p>
          <button
            className="fw-semibold text-light text-medium rounded-5 px-4 py-2"
            style={{ border: "none", background: "#ff9d02" }}
          >
            Get Started
          </button>
        </div>
        <div className="custom-hero-child">
          <img src={heroImg} alt="" className="custom-hero-child-img" />
        </div>
      </div>
    </>
  );
}
