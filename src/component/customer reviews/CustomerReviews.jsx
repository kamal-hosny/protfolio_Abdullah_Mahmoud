// CSS Style
import "./CustomerReviews.css";
// import React
import React from 'react'

// ? import External libraries
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// mui icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
//
import MainTitle from "../MainTitle";

const myCustomers = [
    {
        id: 1,
        paragraph: "The designer, Abdullah Mahmoud holds a training certificate with an excellence degree recognized by Adobe",
        name: "عبدالله الديزاينر",
        img: "../../../public/images/pic.png",
        stars: 5,
    },
    {
        id: 2,
        paragraph: "let him cook",
        name: "yuta",
        img: "../../../public/images/shapes/Our best work/test-1.jpg",
        stars: 3,
    },
    {
        id: 3,
        paragraph: "جميل",
        name: "محهول",
        img: null,
        stars: 1,
    },
    {
        id: 4,
        paragraph: "The designer, Abdullah Mahmoud holds a training certificate with an excellence degree recognized by Adobe",
        name: "عبدالله الديزاينر",
        img: "../../../public/images/pic.png",
        stars: 5,
    },
    {
        id: 5,
        paragraph: "let him cook",
        name: "yuta",
        img: "../../../public/images/shapes/Our best work/test-1.jpg",
        stars: 3,
    },
    {
        id: 6,
        paragraph: "جميل",
        name: "محهول",
        img: null,
        stars: 1,
    },
]


export default function CustomerReviews() {
    return (
        <div className="customerReviews">
            <MainTitle title="Customer Reviews" />
            <div className="container">
                <Swiper
                className="swiper"
                    modules={[Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={true}
                    navigation
                    breakpoints={{
                        768: {
                          slidesPerView: 3,
                        },
                        576: {
                          slidesPerView: 2,
                        },
                      }}
                >
                    {myCustomers.map((x) => {
                        return(
                            <SwiperSlide key={x.id} className="swiper-slide">
                                <div className="card">
                                    <img className="quote" src="/public/images/shapes/1x/quotes.png" alt="" />
                                    <div className="image">
                                        <img src={x.img !== null ? x.img: "/public/images/avatar_male.webp"} alt="" />
                                    </div>
                                    <h3>{x.name}</h3>
                                    <div className="stars">
                                    {Array.from({ length: x.stars }, (_, index) => (
                                        <StarIcon key={index} className="icon" />
                                    ))}
                                    </div>
                                    <p>{x.paragraph}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    

                </Swiper>
            </div>
        </div>
    )
}
