import LoginAuthForm from '../_components/LoginAuthForm';

export default function Page() {
  return (
    <div>
      <div className="mt-44 mb-16 flex justify-center items-center flex-col font-medium">
        <h1 className="text-5xl mb-3 font-galmuri text-[#2563EB] ">GYMMI</h1>
        <h3 className="text-sm text-[#2563EB] font-galmuri">
          지미와 함께 운동의욕을 채워보세요!
        </h3>
      </div>
      <LoginAuthForm />
    </div>
  );
}
