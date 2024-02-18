// CSS Style
import MainTitle from "../MainTitle";
import "./OurBestWork.css";
// import React
import React, { useState } from "react";
// ? import External libraries
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
  import "swiper/css";

export default function OurBestWork() {
  return (
    <div className="OurBestWork">
      <MainTitle title="Our Best Work" />
      {/* <div className="container"> */}
        <Swiper
          className="swiper"
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(e) => console.log("slide change" , e.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      {/* </div> */}
    </div>
  );
}
