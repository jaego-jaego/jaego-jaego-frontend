import TabMenu from "@/src/components/MoleCules/TabMenu/TabMenu";
import Table from "@/src/components/MoleCules/Table/Table";

interface TableRow<T> {
  id: string;
  data: T;
}

export default function stock() {
  return (
    <div>
      <TabMenu />
      <Table />
    </div>
  );
}
