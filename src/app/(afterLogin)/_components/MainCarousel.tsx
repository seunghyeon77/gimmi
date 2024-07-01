'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Progress } from '@/components/ui/progress';

import { faker } from '@faker-js/faker';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { myWorkspaces } from '@/api/workspace';

export default function MainCarousel() {
  const { data } = useQuery({
    queryKey: [workspace.mylists],
    queryFn: () => myWorkspaces(),
  });

  console.log(data);
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
            <Link href={`/workspace-list/mygroup`} key={item.id}>
              <SwiperSlide>
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
            </Link>
          );
        })}
      </Swiper>
    </div>
  );
}
