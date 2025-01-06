import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from './../SectionTitle/SectionTitle';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/reviews.json').then((response) => {
      setReviews(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <SectionTitle
        title="Testimonials"
        subtitle="What our users say"
      />

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}  // Make sure Autoplay is correctly passed here
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,  // Set autoplay delay to 3 seconds
          disableOnInteraction: false,  // Keep autoplay running even after interaction
        }}
        loop={true}  // Ensures infinite loop of slides
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="p-4 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}
                readOnly={true}
              />
              <FaQuoteLeft size={60} />
            </div>
            <p className="text-gray-600 my-4 max-w-4xl mx-auto">{review.details}</p>
            <h3 className="text-2xl font-semibold text-yolo">{review.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
