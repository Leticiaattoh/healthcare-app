import testimonial from "../assets/images/testimonial.png";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Edward Newgate",
    role: "Founder Circle",
    image: testimonial,
    message:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "CEO of InnovateX",
    image: testimonial,
    message:
      "This app has revolutionized the way we communicate with clients. It’s user-friendly, efficient, and secure.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Tech Lead at WebWorks",
    image: testimonial,
    message:
      "A game-changer in the industry. The platform has streamlined our processes and enhanced customer satisfaction.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-4/5 max-w-2xl rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 shadow-lg relative">
        <h2 className="text-center text-lg font-semibold mb-4">
          What our customers are saying
        </h2>
        <hr className="border-t-2 border-white opacity-50  mx-auto w-10" />
        <div className="flex items-center">
          <div className="flex shrink-0">
            <img
              className="w-18 h-18 mt-[40%] ml-[50%]  rounded-full object-cover"
              src={testimonials[current].image}
              alt={testimonials[current].name}
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-[15%] mr-[15%]">
              <p className="font-bold text-sm">{testimonials[current].name}</p>
              <p className="text-xs font-extralight">
                {testimonials[current].role}
              </p>
            </div>

            <div>
              <p className="mt-4 font-extralight text-left text-xs">
                {testimonials[current].message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-8 h-8 flex items-center justify-center rounded-full  bg-white text-blue-500"
          >
            &#8592;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === current ? "bg-white" : "bg-white opacity-50"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-8 h-8 flex items-center justify-center rounded-full  bg-white text-blue-500  "
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
