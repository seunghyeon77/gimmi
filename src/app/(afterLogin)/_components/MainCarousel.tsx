'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Progress } from '@/components/ui/progress';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { myWorkspaces } from '@/api/workspace';

export default function MainCarousel() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: [workspace.mylists],
    queryFn: () => myWorkspaces(),
  });

  return (
    <div className="w-full h-full overflow-hidden">
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
        {data?.data.map((item: any) => {
          return (
            <SwiperSlide
              key={item.id}
              onClick={() => router.push(`/workspace/${item.id}`)}
            >
              <div className="pt-5 px-6">
                <h2 className="font-galmuri text-2xl font-medium mb-3.5">
                  {item.name}
                </h2>
                <Progress
                  value={(item.achievementScore / item.goalScore) * 100}
                  className="h-1.5 "
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
