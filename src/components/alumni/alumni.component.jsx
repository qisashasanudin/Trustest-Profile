import React from 'react';
import './alumni.styles.scss';
import { alumni } from '../../data/alumni';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Alumni = () => {
  return (
    <div className="alumni">
      <h1>
        Who Are We? <div />
      </h1>

      <div className="alumni__list">
        <Swiper
          autoplay={{
            delay: 7500,
            disableOnInteraction: false
          }}
          spaceBetween={10}
          loop={true}
          pagination={true}
          className="alumni__swiper">
          {alumni.map((item) => (
            <SwiperSlide key={item.name} className="alumni__slide">
              <div className="alumni-card">
                <div className="alumni-card__photo">
                  <img src={item.url} alt="alumni" />
                  <h2>{item.name}</h2>
                  <span>{item.role}</span>
                  <p>{item.university}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Alumni;
