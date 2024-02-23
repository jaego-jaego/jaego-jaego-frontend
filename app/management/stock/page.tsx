import TabMenu from "@/src/components/MoleCules/TabMenu/TabMenu";
import Table from "@/src/components/MoleCules/Table/Table";

export default function stock() {
  return (
    <div className="w-full px-4">
      <TabMenu />
      <div></div>
      <Table />
    </div>
  );
}
