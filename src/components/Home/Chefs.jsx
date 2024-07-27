import img1 from "../../assets/team/1.jpeg";
import img2 from "../../assets/team/2.jpeg";
import img3 from "../../assets/team/3.jpeg";
import img4 from "../../assets/team/4.jpeg";
import img5 from "../../assets/team/5.jpeg";
import img6 from "../../assets/team/6.jpeg";
import img7 from "../../assets/team/7.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Chefs = () => {
  const chefArray = [
    {
      title: "Shri Pushyamitra Bhargav Mayor, Indore Municipal Corporation",
      img: img1,
    },
    {
      title:
        "Mr. Abhishek Sharma MIC Member, Water Works and Sewerage Department",
      img: img2,
    },
    {
      title:
        "Mr. Rajesh Udavat MIC Member, Planning & Information Technology Department",
      img: img3,
    },
    {
      title:
        "Shri Rajendra Rathore MIC Member, Public Works and Parks Department",
      img: img4,
    },
    {
      title:
        "Shri Ashwini Shukla MIC Member, Sanitation and Solid Waste Management Department",
      img: img5,
    },
    {
      title: "Shri Niranjan Singh Chouhan, MIC Member, Revenue Department",
      img: img6,
    },
    {
      title: "Smt. Priya Dangi MIC Member, Finance & Accounts Department",
      img: img7,
    },
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
