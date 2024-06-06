'use client';

import { Progress } from '@/components/ui/progress';
import { generateWorkspaces } from '@/utils/fakerData';
import Link from 'next/link';

const workSpaceData = generateWorkspaces(4);

export default function Page() {
  return (
    <div>
      <div className="text-base font-normal mb-9">
        <span className="mr-9">my group</span>
        <Link href={'/workspace/all-group'}>
          <span className="text-slate-200">all group</span>
        </Link>
      </div>
      <div>
        {workSpaceData.map((item) => {
          return (
            <div
              className="bg-[#60A5FA] w-full h-[136px] rounded-lg p-4 mb-7"
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
    </div>
  );
}
