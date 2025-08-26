import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "../Card/Card";

function Album({ albums }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album._id || album.id}>
          <Card
            image={album.image}
            followers={album.follows}
            title={album.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Album;
