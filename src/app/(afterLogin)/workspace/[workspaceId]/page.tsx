import closedMail from '@/../public/svgs/closedMail.svg';
import mainLogo from '@/../public/svgs/mainLogo.svg';
import good from '@/../public/svgs/good.svg';
import creator from '@/../public/svgs/creator.svg';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

const data = {
  name: '워크스페이스 방 제목',
  creator: '경환2',
  headCount: 2,
  state: '진행중',
  goalScore: 1000,
  description: '....',
  achievementScore: 400,
  workers: [
    {
      id: 2,
      name: '경환2',
      contributeScore: 100,
      rank: 1,
    },
    {
      id: 3,
      name: 'zㅣ존가현',
      contributeScore: 200,
      rank: 2,
    },
  ],
};

// 이 페이지 들어왔을때 useQuery로 방 정보 가져오기

export default function Page() {
  return (
    <div>
      <div className="flex items-end mb-11">
        <h1 className="font-galmuri text-3xl">{data.name}</h1>
        <div>
          <Image src={closedMail} alt="closedMail" />
        </div>
      </div>
      <div className=" flex items-center justify-center mb-11">
        <Image src={mainLogo} alt="mainLogo" />
      </div>
      <div className="flex flex-col mb-5">
        <div className="text-[8px] text-[#D1D5DB] mb-3.5">목표 달성률</div>
        <Progress
          className="h-1.5 bg-[#DBEAFE] mb-1"
          value={(data.achievementScore / data.goalScore) * 100}
        />
        <div className="text-[10px] text-[#4B5563] text-right">{`${data.achievementScore}/${data.goalScore}점`}</div>
      </div>
      <div className="flex items-center ml-3.5 mb-2">
        <Image src={good} alt="good" className="mr-1" />
        <span className="text-[10px] text-[#9CA3AF]">획득 점수</span>
      </div>
      {/* 여기에 유저들 매핑해주기 */}
      {data?.workers.map((user) => {
        return (
          <div className="mb-4 text-[#4B5563]" key={user.id}>
            <div className="w-full h-16 bg-[#DBEAFE] rounded-xl flex items-center justify-between px-3.5">
              <div className="h-8 w-8 rounded-full bg-white mr-3.5 flex items-center justify-center relative">
                {user.name === data.creator && (
                  <Image
                    src={creator}
                    alt="creator"
                    className="absolute top-0 left-0"
                  />
                )}

                <Image src={closedMail} alt="icon" />
              </div>
              <div className="flex-1">{user.name}</div>
              <div className="">{`${user.contributeScore} P`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
