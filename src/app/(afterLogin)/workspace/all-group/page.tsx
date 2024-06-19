'use client';

import { useState } from 'react';
import AllGroupTabs from '../_components/AllGroupTabs';
import Link from 'next/link';

export default function Page() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <div className="text-base font-normal mb-9">
        <Link href={'/workspace/gymmi/mygroup'}>
          <span className="mr-9 text-slate-200">my group</span>
        </Link>

        <span>all group</span>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search your group"
          className="bg-slate-100 w-full h-10 rounded-3xl placeholder:text-[10px] p-4 pt-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <AllGroupTabs />
      </div>
    </div>
  );
}
