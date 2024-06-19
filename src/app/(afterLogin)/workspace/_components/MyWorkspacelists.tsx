'use client';

import { myWorkspaces } from '@/api/workspace';
import { Progress } from '@/components/ui/progress';
import { workspace } from '@/constants/queryKey';
import { generateWorkspaces } from '@/utils/fakerData';
import { useQuery } from '@tanstack/react-query';

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
        return (
          <div
            className={`bg-[#60A5FA] w-full h-[136px] rounded-lg p-4 mb-7 ${
              item.state === '완료됨' ? 'opacity-50' : null
            }`}
            key={item.id}
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
        );
      })}
    </div>
  );
}
