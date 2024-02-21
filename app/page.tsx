import React from "react";

import SideMenu from "@/src/components/MoleCules/Menu/SideMenu";
import InventoryManagement from "@/src/components/MoleCules/InventoryManagement/InventoryManagement";

export default function Home() {
  return (
    <main className="w-full h-screen flex  box-border p-4 pt-[9vh] bg-[#161D26]">
      <div className="w-[75%] ml-[5%] bg-slate-200 ">
        <div className="flex">
          <div className="w-1/2">{/* <InventoryManagement /> */}</div>
          <div className="w-1/2">
            <InventoryManagement />
          </div>
        </div>
        <div>달력</div>
      </div>
    </main>
  );
}
