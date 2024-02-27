import React from "react";

// interface TableColumnProps<T> {
//   data: TableRow<T>;
// }

export default function TableColumn<T>({ register, row, index }: any) {
  return (
    <>
      {Object.keys(row).map((el) => {
        return el !== "id" ? (
          <td key={el} className="px-2 py-[10px] text-center text-white">
            <input
              type="text"
              className="text-white w-[99%] h-[30px] bg-[#00000030] border-2 border-solid border-black rounded-md"
              {...register(`stockItem.${index}.${el}`)}
            />
          </td>
        ) : null;
      })}
    </>
  );
}
