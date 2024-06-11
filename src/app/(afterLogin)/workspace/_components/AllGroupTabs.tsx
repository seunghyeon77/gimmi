'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import nextArrow from '@/../public/svgs/nextArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState } from 'react';

export default function AllGroupTabs() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleChange = (e: any) => {
    setPassword(e);
  };
  console.log(password);
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="before-p">진행전</TabsTrigger>
        <TabsTrigger value="ing-p">진행중</TabsTrigger>
        <TabsTrigger value="all">모두</TabsTrigger>
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
        <Dialog>
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
                <span className="text-sm bg-[#F3F4F6] py-1 px-6 rounded-lg">
                  cancel
                </span>
                <span className="text-sm bg-[#F3F4F6] py-1 px-8 rounded-lg">
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
  );
}
