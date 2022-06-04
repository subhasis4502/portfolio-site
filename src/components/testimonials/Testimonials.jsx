import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Soumya Maity",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque nihil illum commodi, exercitationem fugit mollitia. Tempore voluptas necessitatibus iure perspiciatis, assumenda, quasi aperiam rerum placeat eaque nisi perferendis dolores.",
  },
  {
    avatar: AVTR2,
    name: "Soumya Maity",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque nihil illum commodi, exercitationem fugit mollitia. Tempore voluptas necessitatibus iure perspiciatis, assumenda, quasi aperiam rerum placeat eaque nisi perferendis dolores.",
  },
  {
    avatar: AVTR3,
    name: "Soumya Maity",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque nihil illum commodi, exercitationem fugit mollitia. Tempore voluptas necessitatibus iure perspiciatis, assumenda, quasi aperiam rerum placeat eaque nisi perferendis dolores.",
  },
  {
    avatar: AVTR4,
    name: "Soumya Maity",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque nihil illum commodi, exercitationem fugit mollitia. Tempore voluptas necessitatibus iure perspiciatis, assumenda, quasi aperiam rerum placeat eaque nisi perferendis dolores.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map((review, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={review.avatar} alt={review.name} />
              </div>
              <h5 className="client__name">{review.name}</h5>
              <small className="client__review">{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
