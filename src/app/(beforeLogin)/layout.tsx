import { ReactNode } from 'react';
import CheckAuth from './_components/CheckAuth';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="px-6">
      <CheckAuth />
      {children}
    </div>
  );
}
