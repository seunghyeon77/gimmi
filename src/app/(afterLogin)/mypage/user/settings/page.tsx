import basicIcon from '@/../public/images/basicIcon.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className="px-5">
        <div className="flex flex-col justify-center items-center text-[#4B5563] mb-8">
          <div className="w-24 mb-5">
            <Image src={basicIcon} alt="profil-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
