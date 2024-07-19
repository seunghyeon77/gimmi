'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import photoCommunity from '@/../public/svgs/home/photoCommunity.svg';
import myPage from '@/../public/svgs/home/myPage.svg';
import groupPage from '@/../public/svgs/home/groupPage.svg';

import './styles.css';
import Link from 'next/link';

export default function CategorySwiper() {
  return (
    <div className="mt-4 w-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={true}
        className="custom-swiper1"
      >
        <SwiperSlide className="custom-slide1 -ml-28">
          <Link href={'/workspace-list/mygroup'}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-2.5">
                <Image src={groupPage} alt="그룹페이지" />
              </div>
              <span className="text-[10px] text-[#6B7280]">그룹페이지</span>
            </div>{' '}
          </Link>
        </SwiperSlide>

        <SwiperSlide className="custom-slide1">
          <Link href={'/photoCommunity'}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-2.5">
                <Image src={photoCommunity} alt="사진커뮤니티" />
              </div>
              <span className="text-[10px] text-[#6B7280]">사진커뮤니티</span>
            </div>{' '}
          </Link>
        </SwiperSlide>

        <SwiperSlide className="custom-slide1">
          <Link href={'/mypage/user'}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-2.5">
                <Image src={myPage} alt="마이페이지" />
              </div>
              <span className="text-[10px] text-[#6B7280]">마이페이지</span>
            </div>{' '}
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
