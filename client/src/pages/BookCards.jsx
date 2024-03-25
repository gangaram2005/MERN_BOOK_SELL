import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BookCards.css';

// import required modules
import { Pagination } from 'swiper/modules';

// images import 
import python from '../img/pythonbook.jpeg'
import network from '../img/secondbook.jpg'

import {Link} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
export default function BookCards() {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-full"
    >
      <SwiperSlide>
        <Link to='/singlebook'>
            <div className='relative'>
                <img src={python} alt="" />
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className="desc">
                    <h3>python Programming Book</h3>
                    <p>Ganga Ram Jaisi</p>
                </div>
                <div className="price text-2xl m-5">
                    <p>$100</p>
                </div>
            </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <img src={network} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={network} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={network} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={python} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={python} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={python} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={python} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={python} alt="" />
      </SwiperSlide>
    </Swiper>
  </>
);
}
