import basicIcon from '@/../public/images/basicIcon.png';
import Image from 'next/image';
import camera from '@/../public/svgs/camera.svg';
import pencil from '@/../public/svgs/workspace/editPencil.svg';
import EditButton from '@/app/(afterLogin)/mypage/_components/EditButton';

export default function Page() {
  return (
    <div>
      <div className="px-5">
        <div className="flex flex-col justify-center items-center text-[#4B5563] mb-14">
          <div className="w-24 mb-5 relative">
            <Image src={basicIcon} alt="profil-image" />
            <div className="w-8 h-8 bg-[#DBEAFE] rounded-full absolute right-0 -bottom-1 flex justify-center items-center">
              <Image src={camera} alt="camera" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-3">닉네임</h3>
          <form className="relative">
            <input className="w-full h-12 bg-[#F9FAFB] rounded-lg" />
            <div className="absolute right-3 bottom-4">
              <Image src={pencil} alt="edit-pencil" />
            </div>
          </form>
        </div>
      </div>

      <EditButton />
    </div>
  );
}
