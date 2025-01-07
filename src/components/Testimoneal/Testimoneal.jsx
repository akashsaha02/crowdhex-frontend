import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "./../SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/reviews.json")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Speed of the scroll
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <SectionTitle title="Testimonials" subtitle="What our users say" />

      <div className="relative overflow-hidden w-full mt-6">
        <motion.div
          className="flex gap-4 md:gap-6 w-screen"
          variants={marqueeVariants}
          animate="animate"
        >
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 p-4 text-center bg-teal-100 dark:bg-gray-800 shadow-md rounded-lg"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <Rating
                  style={{ maxWidth: 80 }}
                  value={review.rating}
                  readOnly={true}
                />
                <FaQuoteLeft size={30} className="text-gray-400" />
              </div>
              <p className="text-gray-600 my-4 text-sm sm:text-base lg:text-lg line-clamp-3">
                {review.details}
              </p>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yolo">
                {review.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
