import React from "react"
import ashwa from "../assets/color-ashwa.png"
import { Scoreboard, Fixture, Winners } from "../components"

//Swiper
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"

const App = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{
        delay: 100000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Scoreboard />
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height={1000} width={1000} src={ashwa} alt="ashwa" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Fixture />
      </SwiperSlide>
      <SwiperSlide>
        <Winners />
      </SwiperSlide>
    </Swiper>
  )
}

export default App
