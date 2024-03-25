import React from "react";
import foodData from "../../data";
import ItemCard from "../../components/itemCard/ItemCard";

const ProductGrid = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-3">
        <h2 className="text-center fw-bold">
          Most Popular <span className="yellow-text">Food</span>
        </h2>
      </div>

      <div className="container pt-5 px-0 d-flex flex-wrap justify-content-center gap-3 gap-lg-5">
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
    </div>
  );
};

export default ProductGrid;
