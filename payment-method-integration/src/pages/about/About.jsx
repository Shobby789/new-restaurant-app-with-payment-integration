import React from "react";
import "./About.css";
import Header from "../../common/header/Header";
import image from "../../assets/about-us.jpg";

const services = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-breakfast-with-croissants-cornflakes-coffee-white-surface-horizontal_176474-782.jpg?t=st=1711529922~exp=1711533522~hmac=9a824bf3b61eac19b8102671ba3ea0a55082bb3d8ff41e46a25d6b7b20a79633&w=900",
    title: "Breakfast",
    desc: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19997.jpg?t=st=1711530581~exp=1711534181~hmac=41b535017549a0528d665ed093fe6ad615a7c6629031e46cda890e59f0a3b7c6&w=900",
    title: "Lunch",
    desc: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/free-photo/grilled-beef-tomato-skewers_144627-36489.jpg?t=st=1711530523~exp=1711534123~hmac=31b4f30e1759a133cca890e6c88e6ed8427347ab5c9e5f4690077aa9df1217e9&w=900",
    title: "Dinner",
    desc: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
  },
];

const About = () => {
  return (
    <>
      <Header heading={"About"} text={"Know More About Us"} />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2 className="fw-bold">Out Story</h2>
              <p className="text-medium text-grey my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corrupti magnam laborum nisi odit natus amet nemo, sunt magni
                totam eveniet facere deleniti fuga quisquam porro tempore alias
                eos! In architecto distinctio accusantium facilis! A porro quia
                aut quae at!
              </p>
              <button className="yellow-bg border-0 text-light py-2 px-3 rounded-5 text-medium fw-medium">
                View Menu
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 text-center">
              <img src={image} alt="" className="img-fluid w-75" />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <h2 className="fw-semibold mb-3">What Kind of Services we Offer</h2>
          <p className="text-medium yellow-text fw-medium">
            Who are in extremely love with eco friendly system.
          </p>

          <div className="container d-flex flex-wrap justify-content-evenly gap-3 py-5">
            {services.map((service) => {
              return (
                <div
                  className="card service-card border-0"
                  style={{ width: "20rem" }}
                  key={service.id}
                >
                  <img src={service.imageUrl} alt="" className="card-img-top" />
                  <div className="card-body pb-3 text-start">
                    <h5 className="card-title fw-semibold">{service.title}</h5>
                    <p className="card-text text-grey text-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
