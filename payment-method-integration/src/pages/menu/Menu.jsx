import React, { useState } from "react";
import "./Menu.css";
import Header from "../../common/header/Header";
import ItemCard from "../../components/itemCard/ItemCard";
import foodData from "../../data";

const Menu = () => {
  const [items, setItems] = useState(foodData);
  const filterItems = (category) => {
    if (category !== "all") {
      const filteredItems = foodData.filter(
        (item) => item.category == category
      );
      setItems(filteredItems);
    } else {
      setItems(foodData);
    }
  };
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
          {/* <div className="col-sm-0 col-md-1 col-lg-1"></div> */}
          <div className="col-sm-12 col-md-3 col-lg-3 text-center">
            <button
              className="text-small rounded-3 border-0 category-btn"
              onClick={() => filterItems("all")}
            >
              All Menu
            </button>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-center">
            <button
              className="text-small rounded-3 border-0 category-btn"
              onClick={() => filterItems("breakfast")}
            >
              Breakfast
            </button>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-center">
            <button
              className="text-small rounded-3 border-0 category-btn"
              onClick={() => filterItems("lunch")}
            >
              Lunch
            </button>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-center">
            <button
              className="text-small rounded-3 border-0 category-btn"
              onClick={() => filterItems("dinner")}
            >
              Dinner
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-center gap-3 gap-lg-5 py-5">
        {items.map(({ id, title, description, price, imageUrl }) => {
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
