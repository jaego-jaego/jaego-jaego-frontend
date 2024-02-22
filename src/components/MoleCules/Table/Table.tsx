import React from "react";
import TableColumn from "../../Atoms/Table/TableColumn";

export default function Table<T>() {
  const mockData: any = [
    { id: "1", data: { name: "John", age: 30 } },
    { id: "2", data: { name: "Jane", age: 25 } },
    { id: "3", data: { name: "Doe", age: 40 } },
  ];

  return (
    <table className="border-collapse border w-full text-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row: any) => (
          <tr key={row.id}>
            <TableColumn data={row.id} />
            <TableColumn data={row.data.name} />
            <TableColumn data={row.data.age} />
            {/* 다른 열에 대한 데이터 채우기 */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
