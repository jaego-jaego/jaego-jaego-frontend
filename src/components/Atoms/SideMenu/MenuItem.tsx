"use client";

import { setActiveMenu } from "@/src/redux/features/menuSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

interface MenuItemProps {
  icon: string;
  label: string;
  id: number;
}

export default function MenuItem({ icon, label, id }: MenuItemProps) {
  const activeMenuId = useSelector(
    (state: { menuReducer: { activeMenuId: number } }) =>
      state.menuReducer.activeMenuId
  );

  const dispatch = useDispatch();

  const handleMenuActiveClick = (menuId: number) => {
    console.log("active 할 메뉴 id 값", menuId);

    dispatch(setActiveMenu(menuId)); // 액티브한 메뉴를 변경하는 액션 디스패치
  };

  return (
    <li
      className={`w-[85%] mb-5 box-border px-3 py-3 rounded-[2.1rem] ${
        activeMenuId === id ? "bg-[#0CAF60]" : ""
      } `}
      onClick={() => handleMenuActiveClick(id)}
    >
      <div
        className={`flex items-center box-border pl-3 ${
          activeMenuId === id ? "my-2 pl-5" : ""
        } `}
      >
        <Image src={icon} width={20} height={20} alt="매장현황 아이콘" />
        <p className="text-md ml-4 leading-3 text-color-white">{label}</p>
      </div>
    </li>
  );
}
