"use client";
import BaseButton from "../../Atoms/Base/BaseButton";

export default function Header() {
  return (
    <header className="fixed h-[9vh] w-full px-6 left-0 top-0 bg-[#12181F] z-30 flex items-center justify-between">
      <div>
        <p className="font-normal text-sm text-[#FFC531]">
          소상공인을 위한 매장관리 플랫폼
        </p>
        <h1 className="font-bold text-4xl text-[#FFC531]">재고재고</h1>
      </div>
      <div className="flex gap-6">
        <BaseButton
          color="white"
          size="custom"
          className="w-20 h-8"
          onClick={() => {}}
        >
          계정설정
        </BaseButton>
        <p className="font-bold text-2xl text-white">{`[=>`}</p>
      </div>
    </header>
  );
}
