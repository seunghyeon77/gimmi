'use client';

import { myWorkspaces } from '@/api/workspace';
import { Progress } from '@/components/ui/progress';
import { workspace } from '@/constants/queryKey';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function MyWorkspacelits() {
  const { data } = useQuery({
    queryKey: [workspace.mylists],
    queryFn: () => myWorkspaces(),
  });
  console.log(data);

  return (
    <div>
      {data?.data.map((item: any) => {
        return (
          <Link href={`/workspace/${item.id}`} key={item.id}>
            <div
              className={`bg-[#60A5FA] w-full rounded-lg p-4 mb-7 ${
                item.state === '완료됨' ? 'opacity-50' : null
              }`}
            >
              <h2 className="text-2xl mb-3.5 text-white">{item.name}</h2>
              <div className="text-[10px] text-white">{item.tag}</div>
              <div className="text-[10px] text-white mb-3.5">
                <span>{`테스크 점수: ${item.goalScore}점`}</span>
                <span>, </span>
                <span>{item.name}</span>
              </div>
              <Progress
                className="h-1.5"
                value={(item.achievementScore / item.goalScore) * 100}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
