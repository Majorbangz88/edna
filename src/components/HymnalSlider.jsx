import React from 'react';
import Slider from 'react-slick';
import HymnsBg from '../assets/hymns.jpg';
import Hymnals from '../assets/Hymns';

const HymnsSlider = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Helper: split hymn into two columns if too long
  const splitStanzas = (hymnText) => {
    const stanzas = hymnText.trim().split(/\n\s*\n/); // split on double line break
    if (stanzas.length > 4) {
      const mid = Math.ceil(stanzas.length / 2);
      return [stanzas.slice(0, mid), stanzas.slice(mid)];
    }
    return [stanzas];
  };

  return (
    <div
      id={id}
      className='flex flex-col items-center justify-center bg-fixed overflow-hidden py-20 bg-cover relative z-0 bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${HymnsBg})`,
        width: '100%',
        minHeight: '70vh',
      }}>
      <div className='w-full max-w-5xl px-4'>
        <h2 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12'>
          Hymns
        </h2>

        <Slider {...settings}>
          {Hymnals.map((hymnObj, index) => {
            // Flatten the object into an array
            const hymns = Object.values(hymnObj);

            return hymns.map((h, i) => {
              const columns = splitStanzas(h.HYMN);

              return (
                <div
                  key={`${index}-${i}`}
                  className='px-4 flex flex-col items-center justify-center text-center min-h-[50vh]'>
                  <h3 className='text-xl font-semibold text-white mb-6'>
                    {h.NAME}
                  </h3>
                  <div
                    className={`grid gap-8 w-full max-w-4xl ${
                      columns.length === 2 ? 'md:grid-cols-2' : ''
                    }`}>
                    {columns.map((col, colIndex) => (
                      <div
                        key={colIndex}
                        className='text-white whitespace-pre-wrap leading-relaxed'>
                        {col.join('\n\n')}
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HymnsSlider;
