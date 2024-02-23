import React from "react";

// interface TableColumnProps<T> {
//   data: TableRow<T>;
// }

export default function TableColumn<T>({ data }: any) {
  return <td className=" px-2 py-[10px] text-center text-white">{data}</td>;
}
