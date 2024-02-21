// CSS Style
import MainTitle from "../MainTitle";
import "./OurBestWork.css";
// import React
import React, { useState, useRef } from "react";
// ? import External libraries
// import Swiper core and required modules
import { Navigation, EffectFade} from 'swiper/modules';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
  import "swiper/css";
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';


  const myProjects = [
    {
      id: 1,
      ball: "../../../public/images/shapes/Our best work/ball-1.svg",
      imgIcon: "../../../public/images/shapes/Our best work/graphic-1.svg",
      imgProject: "../../../public/images/shapes/Our best work/test-1.jpg"
    },

    {
      id: 2,
      ball: "../../../public/images/shapes/Our best work/ball-2.svg",
      imgIcon: "../../../public/images/shapes/Our best work/graphic-2.svg",
      imgProject: "../../../public/images/shapes/Our best work/test-1.jpg"
    },
 
    {
      id: 3,
      ball: "../../../public/images/shapes/Our best work/ball-3.svg",
      imgIcon: "../../../public/images/shapes/Our best work/graphic-3.svg",
      imgProject: "../../../public/images/shapes/Our best work/test-1.jpg"
    },
 
  ]




export default function OurBestWork() {

  // const [activeSlide, setActiveSlide] = useState(1);


  return (
    <div className="OurBestWork">
      <MainTitle title="Our Best Work" />
      <div className="container">
        <Swiper
          className="swiper"
          modules={[Navigation, EffectFade]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(e) => console.log(e)}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          navigation
          effect={'fade'}
        >

        {myProjects.map((x) => {
          return(
            
            <SwiperSlide key={x.id} className="swiper-slide">
            <div className="content">
              <div className="left">
                <div className="ball"><img src={x.ball} alt="" /></div>
                <div className="img-icon">
                  <img src={x.imgIcon} alt="" />
                </div>
              </div>
              <div className="right">
                <img src={x.imgProject} alt="" />
              </div>
            </div>
          </SwiperSlide>
          
          )
        })}

        </Swiper>
      </div>
    </div>
  );
}
