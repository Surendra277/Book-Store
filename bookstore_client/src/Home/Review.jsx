import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FaStar} from 'react-icons/fa6'
import propic from '../assets/laid.jpg'
import propc from '../assets/sydney.jpg'
import image from '../assets/kylie.jpg'
import image1 from '../assets/roger.jpg'
import image2 from '../assets/ana.jpg'
import image3 from '../assets/mark.jpg'
import image4 from '../assets/jennifer.jpg'


import { Avatar } from "flowbite-react";

import { Navigation, Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-8 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Fantastic service and speedy delivery! The selection is vast and the prices are unbeatable. My books arrived in perfect condition. Highly recommended for all book lovers.
                        
                        <Avatar img={propc} alt="ava" rounded  className='w-10 mb-5 ' />
                        <h5 className='text-lg font-medium'>Sydney Sweeney</h5>
                        <p className='text-base'>American Actress</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Great experience shopping here! The website is easy to navigate, and the customer service is top-notch. My order arrived quickly, and the books were well-packaged. Will shop again.

                        <Avatar img={propic} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>David Laid</h5>
                        <p className='text-base'>Fitness Influencer</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Wide range of books and excellent customer service. I found several rare titles I've been searching for. Delivery was fast, and the books arrived in pristine condition. Very pleased.

                        <Avatar img={image} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>Kylie Jenner</h5>
                        <p className='text-base'>American Socialite</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Impressive selection and user-friendly website. The books were delivered promptly and in perfect condition. The customer support team was very helpful. Will definitely buy from here again.
                       
                        <Avatar img={image1} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>Roger Federer</h5>
                        <p className='text-base'>Swiss Tennis Player</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Great prices and quick shipping! The book descriptions were helpful, and I found exactly what I was looking for. The eco-friendly packaging was a nice touch. Highly recommended.

                        <Avatar img={image2} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>Ana De Armas</h5>
                        <p className='text-base'>Spanish Actress</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Excellent experience! The variety of books is amazing, and the ordering process was smooth. Fast delivery and the books arrived in great shape. Will be back for more.
                       
                        <Avatar img={image3} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>Mark Zuckerberg</h5>
                        <p className='text-base'>CEO, Facebook</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                    Wonderful bookstore with an extensive collection. Easy to use website and outstanding customer service. My books arrived quickly and were well-protected.

                        <Avatar img={image4} alt="ava" rounded  className='w-10 mb-4 ' />
                        <h5 className='text-lg font-medium'>Jennifer Lawrence</h5>
                        <p className='text-base'>American Actress</p>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        
     
      </Swiper>
        </div>
    </div>
  )
}

export default Review;