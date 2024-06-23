import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="px-6 py-12">{children}</div>;
}
