import {Autoplay, EffectFade} from 'swiper/modules';

import foto1 from './assets/prewed/selfie-time-10896foo.jpg_sharp.jpg.jpg';
import foto2 from './assets/prewed/selfie-time-13164foo.jpg_sharp.jpg.jpg';
import foto3 from './assets/prewed/selfie-time-31431foo.jpg_sharp.jpg.jpg';
import foto4 from './assets/prewed/selfie-time-5276foo.jpg_sharp.jpg.jpg';
import foto5 from './assets/prewed/selfie-time-9182foo.jpg_sharp.jpg.jpg';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const ImageSlideShow = () => {
  return (
    <Swiper
      className="h-screen relative"
      effect={'fade'}
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="w-full h-screen relative">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{backgroundImage: `url(${foto1})`}}
        ></div>
        {/* <img src={foto1} className="logo react" alt="React logo" /> */}
      </SwiperSlide>
      <SwiperSlide className="w-full h-screen relative">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{backgroundImage: `url(${foto2})`}}
        ></div>
        {/* <img src={foto2} className="logo react" alt="React logo" /> */}
      </SwiperSlide>
      <SwiperSlide className="w-full h-screen relative">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{backgroundImage: `url(${foto3})`}}
        ></div>
        {/* <img src={foto3} className="logo react" alt="React logo" /> */}
      </SwiperSlide>
      <SwiperSlide className="w-full h-screen relative">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{backgroundImage: `url(${foto4})`}}
        ></div>
        {/* <img src={foto4} className="logo react" alt="React logo" /> */}
      </SwiperSlide>
      <SwiperSlide className="w-full h-screen relative">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{backgroundImage: `url(${foto5})`}}
        ></div>
        {/* <img src={foto5} className="logo react" alt="React logo" /> */}
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlideShow;
