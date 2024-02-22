import React from "react";
import TableColumn from "../../Atoms/Table/TableColumn";

export default function Table<T>() {
  const mockData: any[] = [
    {
      id: "1",
      data: {
        name: "제품A",
        shop: "납품처A",
        itemId: "ID001",
        year: 4,
        month: 2,
        day: 2,
        number: 3,
      },
    },
    {
      id: "2",
      data: {
        name: "제품B",
        shop: "납품처B",
        itemId: "ID002",
        year: 5,
        month: 6,
        day: 1,
        number: 4,
      },
    },
    {
      id: "3",
      data: {
        name: "제품C",
        shop: "납품처C",
        itemId: "ID003",
        year: 4,
        month: 2,
        day: 2,
        number: 3,
      },
    },
    // 나머지 데이터도 같은 형식으로 추가
  ];

  const tableHeaders = [
    { id: 1, label: "품명" },
    { id: 2, label: "주요납품처" },
    { id: 3, label: "유효아이디" },
    { id: 4, label: "연자리수" },
    { id: 5, label: "월자리수" },
    { id: 6, label: "일자리수" },
    { id: 7, label: "순번자리수" },
  ];

  return (
    <table className="border-collapse border w-full text-white mx-auto">
      <thead>
        <tr>
          {tableHeaders.map((headerList) => {
            return (
              <th
                key={headerList.id}
                className="relative border-r-[1px] border-solid border-[#ccc] px-4 py-4  bg-[#161D26] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#ffffff23]"
              >
                {headerList.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {mockData.map((row: any) => (
          <tr key={row.id}>
            <TableColumn data={row.data.name} />
            <TableColumn data={row.data.shop} />
            <TableColumn data={row.data.itemId} />
            <TableColumn data={row.data.year} />
            <TableColumn data={row.data.month} />
            <TableColumn data={row.data.day} />
            <TableColumn data={row.data.number} />
            {/* 다른 열에 대한 데이터 채우기 */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
