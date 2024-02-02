import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'

 const Reviews =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
       autoplay={{autoplay:true,stopOnLastSlide:false}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀
</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀</SwiperSlide>
      <SwiperSlide>"Grateful for the enriching journey with Google Developer Student Club (IIMT) ! Volunteering at the recent event was not just about giving back; it was about building connections, fostering innovation, and being part of something bigger.🌟

From coordinating logistics to engaging participants, every moment added a new layer to my growth.

Special thanks to the core team for entrusting me with this incredible opportunity.Your support made this volunteering experience truly fulfilling. Here's to the spirit of collaboration and the joy of contributing to a community that values learning and development. Looking forward to many more moments of impact with Google Developer Student Club (IIMT) ! 🚀</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
export default Reviews;