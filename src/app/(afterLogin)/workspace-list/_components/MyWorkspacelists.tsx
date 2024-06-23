'use client';

import { myWorkspaces } from '@/api/workspace';
import { Progress } from '@/components/ui/progress';
import { workspace } from '@/constants/queryKey';
import { generateWorkspaces } from '@/utils/fakerData';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const workSpaceData = generateWorkspaces(4);

export default function MyWorkspacelits() {
  const { data } = useQuery({
    queryKey: [workspace.mylists],
    queryFn: myWorkspaces,
  });
  console.log(workSpaceData);
  return (
    <div>
      {workSpaceData.map((item) => {
        //1자리에 워크스페이스 아이디 넣어주기
        return (
          <Link href={`/workspace/${1}`} key={item.id}>
            <div
              className={`bg-[#60A5FA] w-full h-[136px] rounded-lg p-4 mb-7 ${
                item.state === '완료됨' ? 'opacity-50' : null
              }`}
            >
              <h2 className="text-2xl mb-3.5 text-white">{item.title}</h2>
              <div className="text-[10px] text-white">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="text-[10px] text-white mb-3.5">
                <span>{`테스크 점수: ${item.taskScore}점`}</span>
                <span>, </span>
                <span>{item.name}</span>
              </div>
              <Progress className="h-1.5" value={item.achievementRate} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
