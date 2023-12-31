import BaseButton from "../../Atoms/Base/BaseButton";

export default function InventoryManagement() {
  return (
    <section className="w-full border-4 p-10 bg-[#161D26]">
      <h2 className="text-yellow-500 font-bold text-2xl mb-3">재고관리</h2>
      <div className="w-full border-slate-600 ">
        <div className="flex flex-wrap px-6">
          <BaseButton className="mr-[3%]" size="lg" color="indigo">
            재료 입고
          </BaseButton>
          <BaseButton size="lg" color="indigo">
            사용 재료 등록
          </BaseButton>
          <div className="w-full bg-white bg-opacity-10 h-[270px] my-4 text-white">
            <div className="w-inherit box-border p-4">
              <div className="">
                <div>
                  <div className="flex">
                    <h3 className="mr-96">유통기한이 오늘까지에요!</h3>
                    <time className="">(2023년 11월 05일)</time>
                  </div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <div></div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-green-500 text-right font-poppins text-xs font-normal underline">
          &lt; &lt; 더 많은 재고관리를 진행하려면?
        </p>
      </div>
    </section>
  );
}
