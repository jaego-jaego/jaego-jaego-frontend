import TapMenuItem from "../../Atoms/TabMenu/TabMenuItem";

const tabList = [
  { id: "1", label: "관리제품등록", value: 1 },
  { id: "2", label: "입고등록", value: 2 },
  { id: "3", label: "사용폐기등록", value: 3 },
  { id: "4", label: "재고조회", value: 4 },
];

export default function TabMenu() {
  return (
    <div className="flex justify-between min-w-[40%]">
      <div className="flex items-center text-white">
        {tabList.map((list) => {
          return (
            <TapMenuItem key={list.id} label={list.label} value={list.value} />
          );
        })}
      </div>
    </div>
  );
}
