import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useDialog } from "./DialogContext";

function Testimonial() {
  const { testimonialQuery } = useDialog();
  const [testimonialData, setTestimonialData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (testimonialQuery) {
      const testimonials = Object.values(
        testimonialQuery?.page?.advertise?.testimonials || {}
      ).filter(
        (testimonial) =>
          testimonial.message &&
          testimonial.authorName &&
          testimonial.rating &&
          testimonial.authorImage
      );
      setTestimonialData(testimonials);
    }
  }, [testimonialQuery]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth < 768 && sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      }
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  console.log(testimonialData, "testimonialData");

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl text-left font-bold text-gray-900 lg:text-left">
            Testimonials from Our Advertising Partners
          </h2>
          {!isMobile && (
            <div className="flex items-center gap-8 hidden sm:flex">
              <button
                className="group flex justify-center items-center border border-solid border-indigo-600 transition-all duration-500 p-1.5 font-semibold"
                style={{ color: "#002D73" }}
                onClick={previous}
              >
                <svg
                  className="w-6 h-6 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Previous
              </button>
              <button
                className="group flex justify-center items-center border border-solid border-indigo-600 transition-all duration-500 p-1.5 font-semibold"
                onClick={next}
                style={{ color: "#002D73" }}
              >
                Next
                <svg
                  className="w-6 h-6 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="slider-container mb-10" id="slider-testimonial">
        {isMobile ? (
          testimonialData?.map((testimonial, index) => (
            <div key={index} className="p-3">
              <div className="swiper-slide group bg-white border border-solid h-56 border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                <div className="flex items-center mb-3 sm:mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      {testimonial.authorImage && (
                        <img
                          src={testimonial.authorImage.node.sourceUrl}
                          alt={testimonial.authorName}
                          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                        />
                      )}
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                              fill="currentColor"
                            />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm w-full sm:text-sm text-gray-500 leading-4 sm:leading-6 transition-all duration-500 mb-3 sm:mb-9 group-hover:text-gray-800 break-words overflow-hidden overflow-ellipsis max-h-24">
                  {testimonial.message}
                </p>
              </div>
            </div>
          ))
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {testimonialData?.map((testimonial, index) => (
              <div key={index} className="p-3">
                <div className="swiper-slide group bg-white border border-solid h-56 border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                  <div className="flex items-center mb-3 sm:mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        {testimonial.authorImage && (
                          <img
                            src={testimonial.authorImage.node.sourceUrl}
                            alt={testimonial.authorName}
                            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                          />
                        )}
                      </div>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5"
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                fill="currentColor"
                              />
                            </svg>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm w-full sm:text-sm text-gray-500 leading-4 sm:leading-6 transition-all duration-500 mb-3 sm:mb-9 group-hover:text-gray-800 break-words overflow-hidden overflow-ellipsis max-h-24">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

export default Testimonial;
