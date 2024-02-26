"use client";

import React from "react";
import TableColumn from "../../Atoms/Table/TableColumn";
import { useForm } from "react-hook-form";
const mockData: any[] = [
  {
    id: "1",
    data: {
      name: (
        <input
          type="text"
          className="text-white w-[99%] h-[30px] bg-[#00000030] border-2 border-solid border-black rounded-md"
        />
      ),
      shop: (
        <input
          type="text"
          className="text-white w-[99%] h-[30px] bg-[#00000030] border-2 border-solid border-black rounded-md"
        />
      ),
      itemId: (
        <input
          type="text"
          className="text-white w-[99%] h-[30px] bg-[#00000030] border-2 border-solid border-black rounded-md"
        />
      ),
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
  {
    id: "3",
    data: {
      name: "제품f",
      shop: "납품처f",
      itemId: "ID003",
      year: 4,
      month: 2,
      day: 2,
      number: 3,
    },
  },
  {
    id: "3",
    data: {
      name: "제품f",
      shop: "납품처f",
      itemId: "ID003",
      year: 4,
      month: 2,
      day: 2,
      number: 3,
    },
  },
  {
    id: "3",
    data: {
      name: "제품f",
      shop: "납품처f",
      itemId: "ID003",
      year: 4,
      month: 2,
      day: 2,
      number: 3,
    },
  },
  {
    id: "3",
    data: {
      name: "제품f",
      shop: "납품처f",
      itemId: "ID003",
      year: 4,
      month: 2,
      day: 2,
      number: 3,
    },
  },
  {
    id: "3",
    data: {
      name: "제품ll",
      shop: "납품처f",
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

export default function Table<T>() {
  const {
    register,
    control,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });
  return (
    <div className="flex flex-col">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="sm:rounded-lg">
            <div className="h-[75vh] overflow-auto">
              <table className="min-w-full">
                <thead className="sticky top-0 bg-[#161D26] border-b-[0.5px] border-[#656565] border-solid">
                  <tr className="">
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
                  {mockData.map((row: any) => (
                    <tr key={row.id}>
                      <TableColumn data={row.data.name} />
                      <TableColumn data={row.data.shop} />
                      <TableColumn data={row.data.itemId} />
                      <TableColumn data={row.data.year} />
                      <TableColumn data={row.data.month} />
                      <TableColumn data={row.data.day} />
                      <TableColumn data={row.data.number} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
