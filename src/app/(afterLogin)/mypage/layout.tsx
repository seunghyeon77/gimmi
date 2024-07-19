import { ReactNode } from 'react';
import BackArrow from '@/app/(afterLogin)/_components/BackArrow';

//여기에서만 네브바 넣기 - 워크스페이스 부분,

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className="px-5 pt-12 mb-10">
        <BackArrow />
      </div>
      <div>{children}</div>
    </div>
  );
}
