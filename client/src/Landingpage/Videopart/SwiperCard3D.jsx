import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperCard3D() {
  const videos = [
    "https://www.youtube.com/embed/iifT9X6uIyA?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/JKqM9XkZ17k?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/dveQrSg4HQU?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/jpneMtcNM5E?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/R6lvatKwFMM?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/-BhjTRU20dw?rel=0&modestbranding=1&controls=1",
  ];

  const swiperRef = useRef(null);

  const playFullscreen = (iframe) => {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen(); // Firefox
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen(); // IE/Edge
    }
  };

  return (
    <div className="pb-5">
      <h1 className="subhead2 py-3">Video Library</h1>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <iframe
              className="responsive-iframe"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onClick={(e) => playFullscreen(e.target)}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-slide-custom {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .responsive-iframe {
          width: 100%;
          height: 250px;
          margin: 10px;
          border-radius: 8px;
        }

        .swiper-pagination {
          margin-top: 90px !important;
        }
      `}</style>
    </div>
  );
}
