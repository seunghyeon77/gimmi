'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Progress } from '@/components/ui/progress';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { myWorkspaces } from '@/api/workspace';
import Image from 'next/image';

import NoGroup from './NoGroup';

import mainLogo0 from '@/../public/svgs/home/character0.svg';
import mainLogo25 from '@/../public/svgs/home/character25.svg';
import mainLogo50 from '@/../public/svgs/home/character50.svg';
import mainLogo75 from '@/../public/svgs/home/character75.svg';

export default function MainCarousel() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: [workspace.mylists],
    queryFn: () => myWorkspaces(),
  });

  return (
    <div className="w-full h-full overflow-hidden">
      {data?.data.length >= 1 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={18}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          centeredSlides={true}
          className="mySwiper"
        >
          {data?.data
            .filter((item: any) => item.status !== 'COMPLETED')
            .map((item: any) => {
              console.log(item);
              let percent = (item.achievementScore / item.goalScore) * 100;

              if (percent > 100) {
                percent = 100;
              }
              return (
                <SwiperSlide
                  key={item.id}
                  onClick={() => router.push(`/workspace/${item.id}`)}
                >
                  <div className="pt-5 px-6">
                    <h2 className="font-galmuri text-2xl font-medium mb-3.5 whitespace-nowrap">
                      {item.name}
                    </h2>
                    <Progress
                      value={(item.achievementScore / item.goalScore) * 100}
                      className="h-1.5 mb-8"
                    />
                    <div className="flex justify-center items-center w-full">
                      {percent < 25 && percent >= 0 ? (
                        <Image src={mainLogo0} alt="mainLogo0" />
                      ) : null}
                      {percent < 50 && percent >= 25 ? (
                        <Image src={mainLogo25} alt="mainLogo25" />
                      ) : null}
                      {percent < 75 && percent >= 50 ? (
                        <Image src={mainLogo50} alt="mainLogo50" />
                      ) : null}
                      {percent <= 100 && percent >= 75 ? (
                        <Image src={mainLogo75} alt="mainLogo75" />
                      ) : null}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      ) : (
        <NoGroup />
      )}
    </div>
  );
}
