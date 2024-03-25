import React from "react";
import "./Menu.css";
import Header from "../../common/header/Header";
import ItemCard from "../../components/itemCard/ItemCard";
import foodData from "../../data";

const Menu = () => {
  return (
    <>
      <Header
        heading={"Menu"}
        text={"Who are in extremely love with eco friendly system."}
      />
      <div className="text-center container py-5">
        <h2 className="fw-semibold mb-3">
          What kind of Foods we serve for you
        </h2>
        <p className="text-medium yellow-text fw-medium">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className="container pb-5">
        <div className="row rounded-3">
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              All Menu
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              Breakfast
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              Lunch
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              Dinner
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              Budget Meal
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button className="text-small rounded-3 border-0 category-btn">
              Buffet
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-center gap-3 gap-lg-5 py-5">
        {foodData.map(({ id, title, description, price, imageUrl }) => {
          return (
            <ItemCard
              id={id}
              key={id}
              title={title}
              description={description}
              price={price}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default Menu;
