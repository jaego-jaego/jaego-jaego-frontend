import TapMenuItem from "../../Atoms/TabMenu/TabMenuItem";

export default function TabMenu() {
  return (
    <div className="flex justify-between w-[30%] p-4">
      <div className="flex items-center text-white">
        <TapMenuItem label="관리제품등록" /> |
        <TapMenuItem label="입고등록" /> |
        <TapMenuItem label="사용폐기등록" /> |
        <TapMenuItem label="재고조회" />
      </div>
    </div>
  );
}
