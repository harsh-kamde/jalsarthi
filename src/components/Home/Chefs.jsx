import img1 from "../../assets/team/1.jpg";
import img2 from "../../assets/team/1.jpg";
import img3 from "../../assets/team/1.jpg";
import img4 from "../../assets/team/1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Chefs = () => {
  const chefArray = [
    { title: "HelloMan", img: img1 },
    { title: "DummyMan", img: img2 },
    { title: "ChaloMan", img: img3 },
    { title: "SpiderMan", img: img4 },
    
  ];
  return (
    <div className="d-flex justify-content-center align-items-center gap-4">
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        modules={[Navigation, Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          280: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          460: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
      >
        {chefArray.map((item) => (
          <SwiperSlide key={item.title} className="my-2">
            <div className="feature-item text-center">
              <img src={item.img} className="img-fluid" alt="" />
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chefs;
