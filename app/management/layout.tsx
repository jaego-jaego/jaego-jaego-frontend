import SideMenu from "@/src/components/MoleCules/Menu/SideMenu";
import { ReactNode } from "react";

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex bg-[#161D26]">
      <div className="w-[20%] h-screen min-w-[250px]">
        <SideMenu />
      </div>
      <div className="w-[77%] h-[100%] bg-[#12181F] border-box mt-[9rem] ml-[2rem] rounded-xl">
        {children}
      </div>
    </section>
  );
}
