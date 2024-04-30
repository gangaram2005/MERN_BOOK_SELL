import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <div className="mt-12">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full p-4 border-4 ml-3 box-border z-10">
            <div className="text-amber-500 star flex gap-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="paragraphs mt-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptates vitae quibusdam animi nobis quasi est, possimus
                deserunt voluptas praesentium debitis harum quisquam ratione
                culpa explicabo dignissimos temporibus ipsam eaque.
              </p>
            </div>
            <div className="people mt-7 mb-7 items-start ml-0">image</div>
            <div className="person-name">
              <h1>kamal pd Sharma</h1>
            </div>
            <div className="company-name">
              <h1>KMC College</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-4 border-4 ml-3 box-border z-10">
            <div className="text-amber-500 star flex gap-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="paragraphs mt-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptates vitae quibusdam animi nobis quasi est, possimus
                deserunt voluptas praesentium debitis harum quisquam ratione
                culpa explicabo dignissimos temporibus ipsam eaque.
              </p>
            </div>
            <div className="people mt-7 mb-7 items-start ml-0">image</div>
            <div className="person-name">
              <h1>kamal pd sharma</h1>
            </div>
            <div className="company-name">
              <h1>KMC College</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-4 border-4 ml-3 box-border z-10">
            <div className="text-amber-500 star flex gap-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="paragraphs mt-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptates vitae quibusdam animi nobis quasi est, possimus
                deserunt voluptas praesentium debitis harum quisquam ratione
                culpa explicabo dignissimos temporibus ipsam eaque.
              </p>
            </div>
            <div className="people mt-7 mb-7 items-start ml-0">image</div>
            <div className="person-name">
              <h1>kamal pd Sharma </h1>
            </div>
            <div className="company-name">
              <h1>KMC College</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-4 border-4 ml-3 box-border z-10">
            <div className="text-amber-500 star flex gap-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="paragraphs mt-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptates vitae quibusdam animi nobis quasi est, possimus
                deserunt voluptas praesentium debitis harum quisquam ratione
                culpa explicabo dignissimos temporibus ipsam eaque.
              </p>
            </div>
            <div className="people mt-7 mb-7 items-start ml-0">image</div>
            <div className="person-name">
              <h1>kamal pd Sharma </h1>
            </div>
            <div className="company-name">
              <h1>KMC College</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Reviews;
