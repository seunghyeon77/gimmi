'use client';

import closedMail from '@/../public/svgs/closedMail.svg';
import mainLogo from '@/../public/svgs/mainLogo.svg';
import good from '@/../public/svgs/good.svg';
import creator from '@/../public/svgs/creator.svg';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import useUser from '@/hooks/useUser';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { infoWorkspace, startWorkspace } from '@/api/workspace';
import { useQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { useParams } from 'next/navigation';

const data = {
  name: '워크스페이스 방 제목',
  creator: 'zㅣ존가현',
  headCount: 2,
  state: '진행전',
  goalScore: 1000,
  description: '....',
  achievementScore: 400,
  workers: [
    {
      id: 3,
      name: 'zㅣ존가현',
      contributeScore: 200,
      rank: 2,
    },
    {
      id: 1,
      name: '경환2',
      contributeScore: 100,
      rank: 1,
    },
    {
      id: 2,
      name: '경환3',
      contributeScore: 100,
      rank: 1,
    },
    {
      id: 5,
      name: '경환5',
      contributeScore: 100,
      rank: 1,
    },
  ],
};

// 이 페이지 들어왔을때 useQuery로 방 정보 가져오기

export default function Page() {
  const {
    user: { userId, nickname },
  } = useUser();

  const { workspaceId } = useParams();

  const {} = useQuery({
    queryKey: [workspace.info, workspaceId],
    queryFn: () => infoWorkspace(Number(workspaceId)),
  });

  const handleStart = async () => {
    const res = await startWorkspace(Number(workspaceId));
    console.log(res);
  };

  return (
    <div>
      <div className="mb-14">
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
        {data?.workers
          .sort((a, b) => (a.id === userId ? -1 : b.id === userId ? 1 : 0))
          .map((user) => {
            const isCurrentUser = user.id === userId;
            return (
              <div className="mb-4 text-[#4B5563]" key={user.id}>
                <div
                  className={`w-full h-16 ${
                    isCurrentUser ? 'bg-[#C8F68B]' : 'bg-[#DBEAFE] '
                  } rounded-xl flex items-center justify-between px-3.5`}
                >
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
      {/* 조건으로 유저 닉네임과 방장 같으면 뭐시기 넣어주기 */}
      {data.state === '진행전' && nickname === data.creator && (
        <div
          className="px-10 fixed bottom-11 left-0 w-full"
          onClick={handleStart}
        >
          <button className="w-full py-3.5 bg-main text-white text-base rounded-lg">
            그룹 시작하기
          </button>
        </div>
      )}

      <Dialog>
        <DialogTrigger asChild>
          {data.state === '진행전' && nickname !== data.creator && (
            <div className="px-10 fixed bottom-11 left-0 w-full">
              <button className="w-full py-3.5 bg-main text-white text-base rounded-lg">
                그룹 나가기
              </button>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="w-4/6 rounded-lg h-[138px]">
          <DialogDescription className="flex items-center justify-center -mb-6">
            <span className="text-[#1F2937]">그룹을 나가시겠습니까?</span>
          </DialogDescription>
          <DialogFooter>
            <div className="w-full flex items-center justify-between text-sm font-light">
              <DialogClose asChild>
                <span className="text-sm bg-main py-1 px-7 rounded-lg text-white">
                  cancel
                </span>
              </DialogClose>
              <span className="text-sm bg-[#EFF6FF] py-1 px-10 rounded-lg text-main">
                yes
              </span>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
