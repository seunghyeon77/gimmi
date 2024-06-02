'use client';

import { useRouter } from 'next/navigation';

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
    </div>
  );
}
