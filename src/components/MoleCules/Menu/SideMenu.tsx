import { Suspense } from "react";
import Icon from "@/src/components/Atoms/SideMenu/Icon";
import SideList from "@/src/components/Atoms/SideMenu/SideList";
import Skeleton from "@/src/utils/Skeleton";

export default function SideMenu() {
  return (
    <div>
      <div className="w-inherit h-[100%] bg-[#12181F] border-box mt-[9rem] pt-[8rem] pb-60 rounded-xl">
        <div>
          <p className="text-center text-color-white text-md mb-3">
            [매장명]✅
          </p>
          <div className="w-full mb-9">
            <Suspense fallback={<Skeleton />}>
              <Icon />
            </Suspense>
          </div>
          <p className="text-center text-color-white mb-8">
            [매장관리 &gt; 매장설명]
          </p>
          <div className="border-box px-2">
            <SideList />
          </div>
        </div>
      </div>
      <div className="w-inherit h-[100%] border-box px-12 py-8 text-2xl leading-7  break-keep text-primary">
        재고재고에 대해 더 궁금하시다면?
        <br /> 아래 블로그를 읽어보세요
      </div>
    </div>
  );
}
