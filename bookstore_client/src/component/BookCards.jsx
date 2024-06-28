// import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6'; 
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const BookCards = ({headline, books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full "
      >
        
        {
            books.map( book => <SwiperSlide key={book._id}>
                <Link to="/">
                    <div className='relative'>
                        <img src={book.image} alt="" />
                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        </div>
                        <div>
                            <p>Rs{book.price}</p>
                        </div>
                    </div>
                </Link>
            </SwiperSlide> )
        }
      </Swiper>
        </div>
    </div>
  )
  
}
// BookCards.propTypes = {
//   headline: PropTypes.string.isRequired,
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       imageURL: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default BookCards