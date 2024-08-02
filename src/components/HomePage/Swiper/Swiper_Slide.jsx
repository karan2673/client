import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./Swiper.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Swiper_Slide = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="photos_rooms">
        <div className="heading" data-aos="fade-up">
          Photos Of Our Rooms
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // enable autoplay even after user interaction
          }}
          className="mySwiper"
          data-aos="slide-up"
        >
          <SwiperSlide>
            <img className="img" src="Hostel_Room4.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img" src="Hostel_Room2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src="Hostel_Room3.avif" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src="Hostel_Room1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src="Hostel_Room5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
