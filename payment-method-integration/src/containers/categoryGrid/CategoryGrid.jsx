import React from "react";
import "./CategoryGrid.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import foodData from "../../data";
import ItemCard from "../../components/itemCard/ItemCard";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 3,
    },
  },
};

export const categories = [
  {
    id: 1,
    category: "breakfast-items",
    title: "Lunch",
    imageUrl:
      "https://img.freepik.com/free-photo/delicious-peanut-butter-table_144627-12434.jpg?t=st=1711225005~exp=1711228605~hmac=89ce70d27f3f10bdf241343f10de036f92a07b57e85f901e9468bfa281807382&w=996",
  },
  {
    id: 2,
    category: "lunch-items",
    title: "Lunch",
    imageUrl:
      "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34684.jpg?t=st=1711225068~exp=1711228668~hmac=5bff0de4970d8a4ff1a3ebf6cdb276bf4d5e56cbf4c41938513910e30b9c3691&w=900",
  },
  {
    id: 3,
    category: "dinner-items",
    title: "Dinner",
    imageUrl:
      "https://img.freepik.com/free-photo/delicious-food-black-board_144627-34729.jpg?t=st=1711225146~exp=1711228746~hmac=03899c48e807b2013e1ed81e0d71da4bbcf03ee46e031ce345e0a53bf2fdeed8&w=900",
  },
  {
    id: 4,
    category: "snacks",
    title: "Snacks",
    imageUrl:
      "https://img.freepik.com/free-vector/salty-snack-pieces-set_1284-21745.jpg?t=st=1711225195~exp=1711228795~hmac=a5068161a358851cd73fbc23e328fbd4b744e1fa2602f7d0ed87c6fc2bdf9e81&w=900",
  },
  {
    id: 5,
    category: "drinks",
    title: "Drinks",
    imageUrl:
      "https://img.freepik.com/free-photo/infused-water_1339-754.jpg?t=st=1711225229~exp=1711228829~hmac=154ed2c5c4cbc756b4c3b480cb420e5170ece5ca9f601e62d25ba0aafde7b07a&w=900",
  },
];

const CategoryGrid = () => {
  return (
    <div className="container category-grid position-relative">
      <div className="container mb-4">
        <h2 className="text-center fw-bold">
          Most Popular <span className="yellow-text">Food</span>
        </h2>
      </div>

      <div className="container position-relative pt-5">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {foodData.map(({ id, title, description, price, imageUrl }) => {
            return (
              <SwiperSlide key={id}>
                <ItemCard
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  price={price}
                  imageUrl={imageUrl}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryGrid;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
