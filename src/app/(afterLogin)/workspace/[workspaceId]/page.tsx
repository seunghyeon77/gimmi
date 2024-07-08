'use client';

import minus from '@/../public/svgs/workspace/minus.svg';
import plus from '@/../public/svgs/workspace/plus.svg';
import check from '@/../public/svgs/workspace/check.svg';

import mainLogo0 from '@/../public/svgs/mainLogo0.svg';
import mainLogo25 from '@/../public/svgs/mainLogo25.svg';
import mainLogo50 from '@/../public/svgs/mainLogo50.svg';
import mainLogo75 from '@/../public/svgs/mainLogo75.svg';
import settings from '@/../public/svgs/workspace/settings.svg';

import noImage from '@/../public/svgs/noImage.svg';

import good from '@/../public/svgs/good.svg';
import creator from '@/../public/svgs/creator.svg';

import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  infoWorkspace,
  leaveWorkspace,
  missionsRecord,
  missionsWorkspace,
  postMissions,
  startWorkspace,
} from '@/api/workspace';
import { useQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import customAxios from '@/utils/cutstomAxios';
// import { Divide } from 'lucide-react';

type MissonData = {
  id: number;
  mission: string;
  score: number;
};
// 이 페이지 들어왔을때 useQuery로 방 정보 가져오기

export default function Page() {
  const { workspaceId } = useParams();

  const [workout, setWorkout] = useState(false);
  const [missionData, setMissionData] = useState<MissonData[]>();

  const [worksoutRecord, setWorkoutRecord] = useState([]);

  const router = useRouter();

  const [count, setCount] = useState<{ id: number; count: number }[]>([]);

  const { data } = useQuery({
    queryKey: [workspace.info, workspaceId, workout],
    queryFn: () => infoWorkspace(Number(workspaceId)),
  });

  const percent = (data?.data.achievementScore / data?.data.goalScore) * 100;
  const user = data?.data.workers.filter((user: any) => user.isMyself === true);

  const handleWorkout = async (userId: number) => {
    if (data?.data.status !== 'IN_PROGRESS') return;
    setWorkout((v) => !v);
    const res = await missionsWorkspace(Number(workspaceId));
    const recordData = await workoutRecord(userId);
    console.log(recordData);
    setMissionData(res.data);
    //여기에 유저의 워크스페이스 count기록 볼 수있게 로직 짤 예정 데이터 불러오고 userId값 백에서 추가로 달라고하기
    // const res2 = await missionsRecord({workspaceId,userId})
  };
  const workoutRecord = async (userId: number) => {
    const id = Number(workspaceId);
    console.log(user);
    try {
      const res = await missionsRecord({ workspaceId: id, userId });
      setWorkoutRecord(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStart = async () => {
    try {
      const res = await startWorkspace(Number(workspaceId));
      console.log(res);
    } catch (error: any) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  const handleLeave = async () => {
    try {
      const res = await leaveWorkspace(Number(workspaceId));
      console.log(res);
      if (res.status === 200) {
        router.push('/workspace-list/mygroup');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleMissions = async () => {
    try {
      const res = await postMissions({ workspaceId, missions: count });
      console.log(res);
      if (res.data.workingScore > 0) {
        setWorkout(false);
        router.push(`/workspace/${workspaceId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (missionData) {
      const initialCounts = missionData.map((mission) => ({
        id: mission.id,
        count: 0,
      }));
      setCount(initialCounts);
    }
  }, [missionData]);

  const addCount = (id: number) => {
    setCount((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };
  const minusCount = (id: number) => {
    setCount((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item,
      ),
    );
  };

  return (
    <div>
      <Link href={`/workspace/workspaceDetail/${workspaceId}`}>
        <div className="absolute right-5 top-14">
          <Image src={settings} alt="settings" />
        </div>
      </Link>

      <div className="mb-14">
        <div className="flex items-end mb-11">
          <h1 className="font-galmuri text-3xl">{data?.data.name}</h1>
        </div>
        <div className=" flex items-center justify-center mb-11">
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
        <div className="flex flex-col mb-5">
          <div className="text-[8px] text-[#D1D5DB] mb-3.5">목표 달성률</div>
          <Progress
            className="h-1.5 bg-[#DBEAFE] mb-1"
            value={(data?.data.achievementScore / data?.data.goalScore) * 100}
          />
          <div className="text-[10px] text-[#4B5563] text-right">{`${data?.data.achievementScore}/${data?.data.goalScore}점`}</div>
        </div>

        {!workout ? (
          <div>
            <div className="flex items-center ml-3.5 mb-2">
              <Image src={good} alt="good" className="mr-1" />
              <span className="text-[10px] text-[#9CA3AF]">획득 점수</span>
            </div>
            {/* 여기에 유저들 매핑해주기 */}
            {data?.data.workers.map((user: any) => {
              return (
                <div
                  className="mb-4 text-[#4B5563]"
                  key={user.id}
                  onClick={() => handleWorkout(user.id)}
                >
                  <div
                    className={`w-full h-16 ${
                      user.isMyself ? 'bg-[#C8F68B]' : 'bg-[#DBEAFE] '
                    } rounded-xl flex items-center justify-between px-3.5`}
                  >
                    <div className="h-8 w-8 rounded-full bg-white mr-3.5 flex items-center justify-center relative">
                      {user.isCreator && (
                        <Image
                          src={creator}
                          alt="creator"
                          className="absolute top-0 left-0"
                        />
                      )}

                      <Image src={noImage} alt="icon" />
                    </div>
                    <div className="flex-1">{user.name}</div>
                    <div className="">{`${user.contributeScore} P`}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="bg-[#E5E7EB] h-[1px] w-full mb-5"></div>
            <Tabs defaultValue="workout" className="w-full">
              <TabsList className="px-1">
                <TabsTrigger value="workout">운동하기</TabsTrigger>
                <TabsTrigger value="myRecord">나의 운동 현황</TabsTrigger>
              </TabsList>
              <TabsContent value="workout">
                {missionData?.map((mission: MissonData, i) => (
                  <div
                    className="flex flex-col justify-between items-center"
                    key={mission.id}
                  >
                    <div className="w-full flex justify-between text-xs border-b-2 py-5 pl-2">
                      <span className="">{mission.mission}</span>
                      <div className="flex justify-center items-center">
                        <button
                          className="text-lg "
                          onClick={() => minusCount(mission.id)}
                        >
                          <Image src={minus} alt="minus" />
                        </button>
                        <span className="mx-1">
                          {count.find((item) => item.id === mission.id)
                            ?.count || 0}
                        </span>
                        <button
                          className="text-lg mx-1"
                          onClick={() => addCount(mission.id)}
                        >
                          <Image src={plus} alt="plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="w-full flex justify-center items-center rounded-md">
                  <button
                    className="w-16 h-6 bg-[#9CA3AF] flex items-center justify-center"
                    onClick={handleMissions}
                  >
                    <Image src={check} alt="check" />
                  </button>
                </div>
              </TabsContent>
              <TabsContent value="myRecord">
                {worksoutRecord.map((record: any) => (
                  <div
                    className="flex flex-col justify-between items-center"
                    key={record.id}
                  >
                    <div className="w-full flex justify-between text-xs border-b-2 py-5 pl-2">
                      <span className="">{record.mission}</span>
                      <div className="flex justify-center items-center pr-2.5">{`${record.totalCount}회`}</div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
      {/* 조건으로 유저 닉네임과 방장 같으면 뭐시기 넣어주기 */}
      {data?.data.status === 'PREPARING' && data?.data.isCreator === true && (
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
          {data?.data.status === 'PREPARING' &&
            data?.data.isCreator === false && (
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
              <span
                className="text-sm bg-[#EFF6FF] py-1 px-10 rounded-lg text-main"
                onClick={handleLeave}
              >
                yes
              </span>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
