import { ReactNode } from "react";

import BackArrow from "../_components/BackArrow";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="px-4 py-12 bg-custom-gradient2 h-full">
      <BackArrow />
      <nav className="my-3">
        <hr className="border w-screen -mx-4" />
        <ul className="flex text-sm gap-x-11 sm:gap-x-8 lg:gap-x-12 justify-center my-2.5">
          <li>그룹홈</li>
          <li>운동하기</li>
          <li>그룹채팅</li>
          <li>운동인증</li>
        </ul>
        <hr className="border w-screen -mx-4" />
      </nav>
      {children}
    </div>
  );
}
