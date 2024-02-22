import React from "react";

// interface TableColumnProps<T> {
//   data: TableRow<T>;
// }

export default function TableColumn<T>({ data }: any) {
  return <td className="border px-4 py-2">{data}</td>;
}
