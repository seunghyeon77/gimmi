'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import nextArrow from '@/../public/svgs/nextArrow.svg';
import Image from 'next/image';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useEffect, useState } from 'react';
import { allWorkspaces, joinWorkspace, matchPassword } from '@/api/workspace';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { workspace } from '@/constants/queryKey';
import { IWorkspace } from '@/types/\bworkSpace';
import { workspaceList } from '@/constants/workSpace';
import { useInView } from 'react-intersection-observer';

export default function AllGroupTabs() {
  const [search, setSearch] = useState('');
  const [tabValue, setTabValue] = useState(workspaceList.complete);
  const [password, setPassword] = useState('');
  const [task, setTask] = useState('');

  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    any,
    Error
  >({
    queryKey: [workspace.all_lists],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await allWorkspaces({
        type: tabValue,
        keyword: search,
        page: pageParam,
      });
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined;
      return pages.length;
    },
  });

  console.log(data);

  const handleChange = (e: any) => {
    setPassword(e);
  };
  const nextDialog = async () => {
    // try {
    //   const res = await matchPassword(Number(password))
    //   if(res.sameness){
    //     setIsFirstDialogOpen(false);
    //     setIsSecondDialogOpen(true); // 두 번째 다이얼로그 열기
    //   }
    // } catch (error) {
    //   console.error(error)
    // }

    setIsFirstDialogOpen(false);
    setIsSecondDialogOpen(true); // 두 번째 다이얼로그 열기
  };

  const onSubmit = async () => {
    try {
      //워크스페이스 아이디 받아서 전해주기
      const res = await joinWorkspace({ password, task, workspaceId: 1 });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTabChange = (e: React.MouseEvent) => {
    console.log(e.currentTarget.id);
    setTabValue(e.currentTarget.id);
  };
  const { ref, inView } = useInView({
    //아래 ref div가 보이고 나서 몇픽셀정도가 호출될건가? -> 보이자마자 호출하기에 0으로 설정
    threshold: 0,
    //아래 ref div가 보이고 나서 몇초후에 이벤트 발생할지
    delay: 0,
  });

  useEffect(() => {
    //처음엔 false 화면에 안보이면 false임, 보이면 true로 변함
    if (inView) {
      //데이터 가져오고 있는데 또 가져오지 않기 위해 isFetching까지
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetching]);

  console.log(ref);

  // console.log('search', search);
  // console.log('type', tabValue);

  //전체적으로 client component 더 분리해보기 (일단 로직 작성 하고 나서 )
  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search your group"
          className="bg-slate-100 w-full h-10 rounded-3xl placeholder:text-[10px] p-4 pt-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger
            value="before-p"
            id={workspaceList.prepare}
            onClick={handleTabChange}
          >
            진행전
          </TabsTrigger>
          <TabsTrigger
            value="ing-p"
            id={workspaceList.inProgress}
            onClick={handleTabChange}
          >
            진행중
          </TabsTrigger>
          <TabsTrigger
            value="all"
            id={workspaceList.complete}
            onClick={handleTabChange}
          >
            모두
          </TabsTrigger>
        </TabsList>
        <div className="border-b-2 mt-2 w-full mb-4"></div>
        <TabsContent value="before-p">
          <div className="w-full h-20 bg-[#60A5FA] rounded-lg flex justify-evenly items-start px-3.5 flex-col my-6">
            <h2 className="text-[22px] -mb-3 text-white">인식이네그룹</h2>
            <Progress className="h-1.5" value={22} />
          </div>
          <div className="w-full h-20 bg-[#FEF9C3] rounded-lg flex justify-between items-center px-3.5">
            <h1 className="text-[22px]">Zㅣ존우리팀</h1>
            <div>
              <Image src={nextArrow} alt="next-arrow" />
            </div>
          </div>
          <Dialog open={isFirstDialogOpen} onOpenChange={setIsFirstDialogOpen}>
            {/* DialogTrigger로 덮여있는 친구들은 dialog가 가능하다 */}
            <DialogTrigger asChild>
              <div className="w-full h-20 bg-[#60A5FA] rounded-lg flex justify-evenly items-start px-3.5 flex-col my-6">
                <h2 className="text-[22px] -mb-3 text-white">인식이네그룹</h2>
                <Progress className="h-1.5" value={22} />
              </div>
            </DialogTrigger>
            <DialogContent className="w-4/6 rounded-lg h-40">
              <DialogHeader>비밀번호를 입력해주세요</DialogHeader>
              <DialogDescription>
                <div className="flex justify-center items-center">
                  <form>
                    <InputOTP
                      value={password}
                      onChange={handleChange}
                      maxLength={4}
                      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </form>
                </div>
              </DialogDescription>
              <DialogFooter>
                <div className="w-full flex items-center justify-around text-[#676767]">
                  <DialogClose asChild>
                    <span className="text-sm bg-[#F3F4F6] py-1 px-6 rounded-lg">
                      cancel
                    </span>
                  </DialogClose>

                  <span
                    className="text-sm bg-[#F3F4F6] py-1 px-8 rounded-lg"
                    onClick={nextDialog}
                  >
                    next
                  </span>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog
            open={isSecondDialogOpen}
            onOpenChange={setIsSecondDialogOpen}
          >
            <DialogContent className="w-4/6 rounded-lg h-40">
              <DialogHeader>테스크를 입력해주세요</DialogHeader>
              <DialogDescription>
                <div className="flex justify-center items-center">
                  <form>
                    <input
                      placeholder="일등에게 맛있는 밥 사주기"
                      className="bg-[#F3F4F6] w-full h-[48px] px-5 rounded-lg"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </form>
                </div>
              </DialogDescription>
              <DialogFooter>
                <div className="w-full flex items-center justify-around text-[#676767]">
                  <DialogClose asChild>
                    <span className="text-sm bg-[#F3F4F6] py-1 px-6 rounded-lg">
                      cancel
                    </span>
                  </DialogClose>

                  <span
                    className="text-sm bg-[#F3F4F6] py-1 px-8 rounded-lg"
                    onClick={onSubmit}
                  >
                    next
                  </span>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>
        <TabsContent value="ing-p">이건 진행중2222222</TabsContent>
        <TabsContent value="all">이건 모두333333333</TabsContent>
      </Tabs>
      <div ref={ref} style={{ height: 10 }} />
    </>
  );
}
