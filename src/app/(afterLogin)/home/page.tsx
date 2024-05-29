export default function Page() {
  return (
    <div className="py-16 px-6 h-lvh bg-main">
      <h1 className="font-galmuri text-3xl pb-3 text-white">GYMMI</h1>
      <h5 className="text-xs mb-6 text-white">
        지미와 함께 운동의욕을 채워보세요!
      </h5>
      <div className="w-full h-96 bg-white rounded-2xl mb-5"></div>
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-2xl w-screen h-52"></div>
        <div className="w-4 bg-main h-52"></div>
        <div className="bg-white rounded-2xl w-screen h-52"></div>
      </div>
    </div>
  );
}
