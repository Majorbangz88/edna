import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Gallery1 from '../assets/gallery-1.jpg';
import Gallery2 from '../assets/gallery-2.jpg';
import Gallery3 from '../assets/gallery-3.jpg';
import Gallery4 from '../assets/gallery-4.jpg';
import Gallery5 from '../assets/gallery-5.jpg';
import Gallery6 from '../assets/gallery-6.jpg';
import Gallery7 from '../assets/gallery-7.jpg';
import Gallery8 from '../assets/gallery-8.jpg';
import Gallery9 from '../assets/gallery-9.jpg';
import Gallery10 from '../assets/gallery-10.jpg';
import Gallery11 from '../assets/gallery-11.jpg';
import Gallery12 from '../assets/gallery-12.jpg';
import Gallery13 from '../assets/gallery-13.jpg';
import Gallery14 from '../assets/gallery-14.jpg';
import Gallery15 from '../assets/gallery-15.jpg';
import Gallery16 from '../assets/gallery-16.jpg';
import Gallery17 from '../assets/gallery-17.jpg';
import Gallery18 from '../assets/gallery-18.jpg';
import Gallery19 from '../assets/gallery-19.jpg';
import HymnsSlider from '../components/HymnalSlider';
import OldPaper from '../assets/old-paper.jpg';
import Tributes from '../assets/Tributes';
import TributeBg from '../assets/tribute1.jpg';
import GratitudeBg from '../assets/gratitude.jpg';

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 300;
      setScrolled(scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = menuOpen
    ? 'text-black'
    : scrolled
    ? 'text-white'
    : 'text-white';

  const navLinks = (
    <ul className='flex flex-col lg:flex-row gap-4 lg:gap-8 text-lg'>
      <li className={`${textColor} cursor-pointer`}>
         Home
      </li>
      <li className={`${textColor} cursor-pointer`}>
        <a href='#biography'>Biography</a>
      </li>
      <li className={`${textColor} cursor-pointer`}>
        <a href='#hymn'>Hymn</a>
      </li>
      <li className={`${textColor} cursor-pointer`}>
        <a href='#gallery'>Gallery</a>
      </li>
      <li className={`${textColor} cursor-pointer`}>
        <a href='#tribute'>Tributes</a>
      </li>
      <li className={`${textColor} cursor-pointer`}>
        <a href='#gratitude'>Appreciation</a>
      </li>
    </ul>
  );

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 px-6 py-5 lg:px-20 lg:py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-black shadow-md' : 'bg-transparent'
        }`}>
        <Link to='/'>
          <p className='font-bold font-oswald text-amber-400 text-3xl lg:text-4xl cursor-pointer'>
            EDNA
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden lg:flex gap-12 items-center text-white'>
          {navLinks}
        </div>

        {/* Hamburger Icon */}
        <div
          className='lg:hidden text-[#d19f68] text-2xl cursor-pointer z-50'
          onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='absolute top-[100%] left-0 w-full bg-white flex flex-col gap-5 px-8 py-6 z-40'>
            {navLinks}
          </div>
        )}
      </div>

      {/* Slider */}
      <div id='gallery' className='h-[500px] md:h-[90vh] lg:h-screen mt-[80px]'>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className='h-full'>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        id='biography'
        className='flex flex-col items-center justify-center bg-fixed px-5 md:px-6 lg:px-15 overflow-hidden py-20 bg-cover relative z-0 bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${OldPaper})`,
          width: '100%',
          minHeight: '70vh',
        }}>
        <div className='absolute inset-0 bg-black opacity-85'></div>
        <div className='relative z-10 flex flex-col items-center gap-10 justify-center'>
          <p className='font-bold font-love text-amber-400 text-4xl md:text-6xl lg:text-6xl decoration0white'>
            Biography of Late. Mrs Edna Edeh
          </p>
          <div className='flex gap-10 '>
            <img
              src={Gallery4}
              alt=''
              className='w-auto h-[80vh] hidden lg:block'
            />
            <p className='w-full text-justify lg:w-[80vh]'>
              Late Mrs. Edna Chioma Amarachukwu Edeh was born on the 19th of
              June 1953 to the family of Mazi Samuel Okalowe and Mrs Regina
              Ihuoma Njoku (both of the blessed memory), of Umuike in Ihitte
              Uboma LGA in Imo State. She was the 6th and last child of her
              parents. <br /> <br />
              Due to the fact that she was born shortly after her father's
              passing on, her eldest brother, Sir Benson Njoku (of the blessed
              memory) played a fatherly role in her upbringing. She attended St.
              Silas Primary School, passed her First School Leaving Certificate
              examinations and gained admission into the prestigious Ezeoke
              Girls' Secondary School. <br />
              <br />
              She thereafter gained admission into the School of Nursing at the
              prestigious University of Nigeria Teaching Hospital Enugu (UNTH)
              and upon completion of her course there, she began her career as a
              registered and qualified nurse. She later enrolled and completed
              her courses at the School of Midwifery, Bishop Shanahan Hospital
              Nsukka, in Enugu State where she obtained her certificate to
              practice as a midwife and later proceeded to obtain further
              certification to practice as an Orthopaedic Nurse from the
              prestigious National Orthopaedic Hospital, Enugu. <br />
              <br />
              In 2013, at the ripe age of 60, she retired from active service as
              a senior matron at the University of Nigeria Teaching Hospital
              (UNTH) Enugu. <br />
              <br />
              During her youthful years, she was a member of the Anglican youth
              fellowship, a member of the Scripture Union and a chorister at the
              Anglican Church. <br />
              <br />
              She was married to Rev. Chidi Edeh of Abor village, Eha-Amufu,
              Isi-Uzo LGA of Enugu State. The marriage was blessed with 3
              children. She was a wife, mother, grandmother, aunt, and sister
              who touched a lot of lives with her acts of kindness, spiritual
              mentorship and philanthropy. <br />
              <br />
              She is survived and will be dearly missed by her husband, children
              and 5 grandchildren. <br />
              <br />
              May her soul continue to rest in God's bosom, Amen! <br />
              <br />
              <span className='font-love text-xl font-bold text-amber-400'>
                Signed: <br />
                Pastor Chidi I. Edeh
              </span>
            </p>
          </div>
        </div>
      </div>

      <HymnsSlider id='hymn' />

      <div
        id='tribute'
        className='flex flex-col items-center justify-center bg-fixed px-5 md:px-6 lg:px-15 overflow-hidden gap-10 py-20 bg-cover relative z-0 bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${TributeBg})`,
          width: '100%',
          minHeight: '70vh',
        }}>
        <div className='absolute inset-0 bg-black opacity-85'></div>
        <p className='font-love text-5xl md:text-6xl lg:text-6xl text-amber-400 z-10'>
          Tributes
        </p>
        <div className='relative z-10 flex w-full h-auto items-center justify-center'>
          {/* Left-side image */}
          <img
            src={Gallery1}
            alt=''
            className='hidden lg:block w-auto h-[80vh]'
          />

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            // autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className='flex-1 h-full' // Added h-full here
          >
            {Tributes.map((tribute, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-start lg:justify-center h-full p-4 w-full gap-5 md:gap-7 lg:gap-8'>
                  <p className='font-bold text-lg capitalize'>
                    {tribute.title}
                  </p>
                  <p className='whitespace-pre-line text-justify'>
                    {tribute.tribute}
                  </p>
                  {tribute.image}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        id='gratitude'
        className='flex flex-col items-center justify-center bg-fixed px-5 md:px-6 lg:px-15 overflow-hidden gap-10 py-20 bg-cover relative z-0 bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${GratitudeBg})`,
          width: '100%',
          minHeight: '70vh',
        }}>
        <div className='absolute inset-0 bg-black opacity-85'></div>
        <p className='font-love text-5xl md:text-6xl lg:text-6xl text-amber-400 z-10'>
          Appreciation
        </p>
        <p className='z-10 w-full lg:w-[70vh] text-justify'>
          We, the family of Pastor Chidi .I. Edeh wishes to appreciate your
          presence at the funeral ceremony of our wife, mother and grandmother,
          late Mrs. Edna Edeh. Your sacrifices, prayers, financial, spiritual
          and other support to our family ensured that today was a success. We
          therefore declare that God shall grant everyone a safe return to our
          individual bases and bless each one of you abundantly. May He always
          answer when you call and grant your requests. Amen. <br /><br />

          Signed: <br />
          Pastor Chidi I. Edeh <br />
          For the family <br />
        </p>
      </div>
    </div>
  );
};

export default Home;
