import React from "react";
import "./Reviews.css";
import heroImg from "../../assets/hero-img.png";
import { IoMdStar } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-portrait-handsome-man-blue-shirt-isolated-white_186202-8938.jpg?t=st=1711226635~exp=1711230235~hmac=404bd65d00e26572962101cca12c819dcac2c4159a3cafb357a8c5847274ae37&w=740",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,minus fugiat expeditacupiditate nemo incidunt? Ipsum unde laboriosam incidunt labore",
  },
  {
    id: 2,
    name: "Will Smith",
    imageUrl:
      "https://img.freepik.com/free-photo/casual-man-model_144627-17075.jpg?t=st=1711225898~exp=1711229498~hmac=340c90fa7037ef6f65f6532b6ab5f81435a023346aa542d6dbcab82569a73509&w=900",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,minus fugiat expeditacupiditate nemo incidunt? Ipsum unde laboriosam incidunt labore",
  },
  {
    id: 3,
    name: "Imly",
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-woman-portrait_144627-27923.jpg?t=st=1711243409~exp=1711247009~hmac=e03a8c705fd9ddd80a752cb68e7f044303d69ae115e7fcfa72b376606aad1e76&w=900",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,minus fugiat expeditacupiditate nemo incidunt? Ipsum unde laboriosam incidunt labore",
  },
  {
    id: 4,
    name: "Rock",
    imageUrl:
      "https://img.freepik.com/free-photo/brunette-man-isolated-white-background_1368-4405.jpg?t=st=1711226653~exp=1711230253~hmac=a00fbebcace1194bae6914aa2dc91736b2627a68776a19d1b1150d28f0114c8f&w=740",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,minus fugiat expeditacupiditate nemo incidunt? Ipsum unde laboriosam incidunt labore",
  },
];

export const sliderSettings2 = {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 1,
    },

    1100: {
      slidesPerView: 1,
    },
  },
};

const Reviews = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-3">
        <h2 className="text-center fw-bold">
          What Our Customers <span className="yellow-text">Say</span>
        </h2>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7 px-3 pe-lg-5 pt-lg-5">
            <Swiper {...sliderSettings2}>
              <SliderButtons2 />
              {reviewsData.map(({ id, name, description, imageUrl }) => {
                return (
                  <SwiperSlide key={id} id={id}>
                    <div className="row review-slide" key={id} id={id}>
                      <div className="row mb-lg-3">
                        <div className="col-sm-4 col-lg-2">
                          <img
                            src={imageUrl}
                            alt=""
                            className="img-fluid"
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "100%",
                            }}
                          />
                        </div>
                        <div className="col-sm-8 col-lg-10 pt-3">
                          <h6 className="text-medium fw-semibold">{name}</h6>
                          <p className="text-small">
                            <IoMdStar className="yellow-text fs-5" />
                            <IoMdStar className="yellow-text fs-5" />
                            <IoMdStar className="yellow-text fs-5" />
                            <IoMdStar className="yellow-text fs-5" />
                            <IoMdStar className="yellow-text fs-5" />
                          </p>
                        </div>
                      </div>
                      <p className="text-medium text-grey ps-lg-3">
                        <RiDoubleQuotesL className="yellow-text me-1" />
                        {description}
                        <RiDoubleQuotesR className="yellow-text ms-1" />
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5">
            <img src={heroImg} alt="" className="review-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const SliderButtons2 = () => {
  const swiper = useSwiper();
  return (
    <div className="r2-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
