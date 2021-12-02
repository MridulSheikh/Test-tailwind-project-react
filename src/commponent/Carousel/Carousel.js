import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function Carousel() {
  
  
  
  return (
    <>
    <Swiper  effect={'coverflow'} grabCursor={true} controller={false} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper w-full p-52 pb-52">
  <SwiperSlide className="bg-center bg-cover w-60">
  <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
  </SwiperSlide>
  
  <SwiperSlide>
  <img src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg" />
  </SwiperSlide>
  
  <SwiperSlide>
  <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </SwiperSlide>
  
  <SwiperSlide>
  <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </SwiperSlide>
  <SwiperSlide>
  <img src="https://media.istockphoto.com/photos/studio-portrait-of-a-man-in-a-suit-picture-id1301253805?b=1&k=20&m=1301253805&s=170667a&w=0&h=HaXLECZux7kHOvkC-ZGzNU5hUauzNFdJSkRKazGjUpI=" />
  </SwiperSlide>
  
  </Swiper>
    </>
  )
}