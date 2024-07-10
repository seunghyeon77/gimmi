import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import photoCommunity from '@/../public/svgs/home/photoCommunity.svg';
import myPage from '@/../public/svgs/home/myPage.svg';
import groupPage from '@/../public/svgs/home/groupPage.svg';

import './styles2.css';

const data = [
  { id: 1, title: '그룹페이지' },
  { id: 2, title: '그룹페이지2' },
  { id: 3, title: '그룹페이지3' },
];

export default function CategorySwiper() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={18}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={true}
        className="mySwiper1"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image src={groupPage} alt="group-page" />
              </div>
              <title className="text-[10px] text-[#6B7280]">그룹페이지</title>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image src={photoCommunity} alt="photo-community" />
              </div>
              <title className="text-[10px] text-[#6B7280]">사진커뮤니티</title>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image src={myPage} alt="my-page" />
              </div>
              <title className="text-[10px] text-[#6B7280]">마이페이지</title>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
