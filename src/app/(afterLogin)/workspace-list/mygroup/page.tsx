import Link from 'next/link';
import MyWorkspacelits from '../_components/MyWorkspacelists';

export default function Page() {
  return (
    <div>
      <div className="text-base font-normal mb-9">
        <span className="mr-9">my group</span>
        <Link href={'/workspace-list/all-group'}>
          <span className="text-slate-200">all group</span>
        </Link>
      </div>
      <div>
        <MyWorkspacelits />
      </div>
    </div>
  );
}
