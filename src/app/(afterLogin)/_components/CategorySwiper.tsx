'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import photoCommunity from '@/../public/svgs/home/photoCommunity.svg';
import myPage from '@/../public/svgs/home/myPage.svg';
import groupPage from '@/../public/svgs/home/groupPage.svg';

const data = [
  { id: 1, title: '그룹페이지', img: groupPage },
  { id: 2, title: '사진커뮤니티', img: photoCommunity },
  { id: 3, title: '마이페이지', img: myPage },
];

export default function CategorySwiper() {
  return (
    <div className="mt-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={true}
        className="custom-swiper1"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="custom-slide1">
            <div className="">
              <div className="mb-3.5">
                <Image src={item.img} alt={item.title} />
              </div>
              <span className="text-[10px] text-[#6B7280]">{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
