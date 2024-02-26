import SideMenu from "@/src/components/MoleCules/Menu/SideMenu";
import { ReactNode } from "react";

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="absolute top-36 left-10 min-w-[250px] ">
        <SideMenu />
      </div>
      <div className="absolute top-36 right-10 w-[77%] bg-[#12181F] border-box p-8 rounded-xl">
        {children}
      </div>
    </section>
  );
}
