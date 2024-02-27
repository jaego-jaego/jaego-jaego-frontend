import React from "react";
import TableColumn from "../../Atoms/Table/TableColumn";
import { UseFormRegister } from "react-hook-form";
const mockData: any[] = [
  {
    id: "1",
    data: {
      name: "",
      shop: "",
      itemId: "",
      year: "",
      month: "",
      day: "",
      number: "",
    },
  },

  // 나머지 데이터도 같은 형식으로 추가
];

const tableHeaders = [
  { id: 1, label: "품명", value: "name" },
  { id: 2, label: "주요납품처", value: "shop" },
  { id: 3, label: "유효아이디", value: "itemId" },
  { id: 4, label: "연자리수", value: "year" },
  { id: 5, label: "월자리수", value: "month" },
  { id: 6, label: "일자리수", value: "day" },
  { id: 7, label: "순번자리수", value: "number" },
];

export default function Table<T>({ fields, register }: any) {
  console.log("register", register, fields);
  return (
    <div className="flex flex-col">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="sm:rounded-lg">
            <div className="h-[70vh] overflow-auto">
              <table className="min-w-full">
                <thead className="sticky top-0 bg-[#161D26] border-b-[0.5px] border-[#656565] border-solid">
                  <tr>
                    {tableHeaders.map((headerList) => {
                      return (
                        <th
                          key={headerList.id}
                          scope="col"
                          className="px-6 py-3 text-center text-lg font-medium text-white border-r-[0.5px] border-solid border-[#656565] tracking-wider last:border-0"
                        >
                          {headerList.label}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 overflow-auto h-full">
                  {fields.map((row: any, index: number) => {
                    console.log("row", row);
                    return (
                      <tr key={row.id}>
                        <TableColumn
                          row={row}
                          index={index}
                          register={register}
                        />
                        {/* <TableColumn register={register} />
                      <TableColumn register={register} />
                      <TableColumn register={register} />
                      <TableColumn register={register} />
                      <TableColumn register={register} />
                      <TableColumn register={register} /> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
