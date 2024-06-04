'use client';

import { useRouter } from 'next/navigation';
import AllGroupTabs from '../_components/AllGroupTabs';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="text-base font-normal mb-9">
        <span
          className="mr-9 text-slate-200"
          onClick={() => router.push('/workspace/gymmi/mygroup')}
        >
          my group
        </span>
        <span>all group</span>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search your group"
          className="bg-slate-100 w-full h-10 rounded-3xl placeholder:text-[10px] p-4 pt-3"
        />
      </div>
      <div>
        <AllGroupTabs />
      </div>
    </div>
  );
}
