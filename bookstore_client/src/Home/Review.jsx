import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import propic from '../assets/laid.jpg';
import propc from '../assets/sydney.jpg';
import image from '../assets/kylie.jpg';
import image1 from '../assets/roger.jpg';
import image2 from '../assets/ana.jpg';
import image3 from '../assets/mark.jpg';
import image4 from '../assets/jennifer.jpg';
import { Avatar } from "flowbite-react";
import { Navigation, Pagination } from 'swiper/modules';
import './Review.css'; 

const Review = () => {
  const reviews = [
    { img: propc, name: 'Sydney Sweeney', desc: 'American Actress', text: 'Fantastic service and speedy delivery! The selection is vast and the prices are unbeatable. My books arrived in perfect condition. Highly recommended for all book lovers.' },
    { img: propic, name: 'David Laid', desc: 'Fitness Influencer', text: 'Great experience shopping here! The website is easy to navigate, and the customer service is top-notch. My order arrived quickly, and the books were well-packaged. Will shop again.' },
    { img: image, name: 'Kylie Jenner', desc: 'American Socialite', text: 'Wide range of books and excellent customer service. I found several rare titles I\'ve been searching for. Delivery was fast, and the books arrived in pristine condition. Very pleased.' },
    { img: image1, name: 'Roger Federer', desc: 'Swiss Tennis Player', text: 'Impressive selection and user-friendly website. The books were delivered promptly and in perfect condition. The customer support team was very helpful. Will definitely buy from here again.' },
    { img: image2, name: 'Ana De Armas', desc: 'Spanish Actress', text: 'Great prices and quick shipping! The book descriptions were helpful, and I found exactly what I was looking for. The eco-friendly packaging was a nice touch. Highly recommended.' },
    { img: image3, name: 'Mark Zuckerberg', desc: 'CEO, Facebook', text: 'Excellent experience! The variety of books is amazing, and the ordering process was smooth. Fast delivery and the books arrived in great shape. Will be back for more.' },
    { img: image4, name: 'Jennifer Lawrence', desc: 'American Actress', text: 'Wonderful bookstore with an extensive collection. Easy to use website and outstanding customer service. My books arrived quickly and were well-protected.' }
  ];

  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-8 leading-snug text-purple-600'>Our Customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg review-slide'>
              <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='mt-7'>
                  <p className='mb-5'>
                    {review.text}
                  </p>
                  <Avatar img={review.img} alt="avatar" className='w-10 mb-4 rounded-full' />
                  <h5 className='text-lg font-medium'>{review.name}</h5>
                  <p className='text-base'>{review.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
