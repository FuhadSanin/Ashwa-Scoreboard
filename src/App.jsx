import React from "react"
import Scoreboard from "../components/Scoreboard/Scoreboard"
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Fixture from "../components/Fixture/Fixture"
import ashwa from "../assets/color-ashwa.png"

const App = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{
        delay: 3000,
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
    </Swiper>
  )
}

export default App
