"use client";

import { setActiveTab } from "@/src/redux/features/tabSlice";
import { useDispatch, useSelector } from "react-redux";

interface TabMenuItemProps {
  value: number;
  label: string;
}

export default function TabMenuItem({ label, value }: TabMenuItemProps) {
  const activeTabMenu = useSelector(
    (state: { tabReducer: { activeTab: number } }) => state.tabReducer.activeTab
  );
  const dispatch = useDispatch();

  const handleClickTabMenu = () => {
    dispatch(setActiveTab(value)); // 액티브한 메뉴를 변경하는 액션 디스패치
  };

  return (
    <>
      <button
        value={value}
        className={`cursor-pointer px-4 py-2 rounded-md hover:bg-[#0CAF60]   ${
          activeTabMenu === value ? "bg-[#0CAF60]" : undefined
        }`}
        onClick={handleClickTabMenu}
      >
        {label}
      </button>
      <span className="after:content-['|'] mx-2 after:text-white last:after:content-['']"></span>
    </>
  );
}
