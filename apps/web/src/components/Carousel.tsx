'use client';

import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type CarouselProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Carousel({ children, className = '' }: CarouselProps) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={className}>
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
