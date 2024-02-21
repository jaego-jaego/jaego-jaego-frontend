import { v4 as uuidv4 } from "uuid";
import SideIcon1 from "@/public/assets/img/SideIcon1.svg";
import SideIcon2 from "@/public/assets/img/SideIcon2.svg";
import SideIcon3 from "@/public/assets/img/SideIcon3.svg";
import SideIcon4 from "@/public/assets/img/SideIcon4.svg";
import SideIcon5 from "@/public/assets/img/SideIcon5.svg";

import MenuItem from "./MenuItem";
export default function SideList() {
  const menuItems = [
    { id: 1, label: "매장현황", link: "/", icon: SideIcon1 },
    { id: 2, label: "예약관리", link: "/reservation", icon: SideIcon2 },
    { id: 3, label: "재고관리", link: "management/stock", icon: SideIcon3 },
    { id: 4, label: "매장관리", link: "/services", icon: SideIcon4 },
    { id: 5, label: "개인설정", link: "/private", icon: SideIcon5 },
  ];

  return (
    <ul className="">
      {menuItems.map((list) => {
        return (
          <>
            <MenuItem
              key={uuidv4()}
              label={list.label}
              icon={list.icon}
              id={list.id}
            />
          </>
        );
      })}
    </ul>
  );
}
