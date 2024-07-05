export default function Page() {
  return (
    <div className="relative">
      <div>
        <div className="mb-9">
          <h1 className="font-galmuri text-xl mb-5">
            워크스페이스 비밀번호 확인
          </h1>
          <div className="w-24 h-12 rounded-lg bg-[#F9FAFB] flex justify-center items-center">
            <span>1 2 3 4</span>
          </div>
        </div>
        <div className="mb-9">
          <label htmlFor="description" className="font-galmuri text-xl">
            그룹 설명
          </label>
          <textarea
            id="description"
            placeholder="그룹 설명을 추가해주세요!"
            className="w-full bg-[#F9FAFB] rounded-lg p-3 mt-5"
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="font-galmuri text-xl">
            그룹 태그
          </label>
          <textarea
            id="description"
            placeholder="그룹 설명을 추가해주세요!"
            className="w-full h-12 bg-[#F9FAFB] rounded-lg p-3 mt-5"
          ></textarea>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-[#EFF6FF] rounded-lg py-4 absolute -bottom-80">
        <button className="text-[#6B7280] text-base ">
          그룹설명, 그룹태그 수정하기
        </button>
      </div>
    </div>
  );
}
