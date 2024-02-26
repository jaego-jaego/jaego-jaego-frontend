"use client";

import TabMenu from "@/src/components/MoleCules/TabMenu/TabMenu";
import Table from "@/src/components/MoleCules/Table/Table";
import { useForm } from "react-hook-form";

export default function Stock() {
  const {
    register,
    control,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      shop: "",
      itemId: "",
      year: "",
      month: "",
      day: "",
      number: "",
    },
  });
  return (
    <div className="w-full px-4">
      <TabMenu />
      <div className="w-full flex justify-end items-center">
        <button className="w-[39px] h-[39px] mr-3 bg-[#0CAF60] text-white text-3xl rounded-full text-center">
          +
        </button>
        <button className="w-[39px] h-[39px] mr-3 bg-[#0CAF60] text-white text-3xl  rounded-full">
          -
        </button>
        <button className="w-24 h-10 mr-3 bg-[#777777] text-white rounded-md">
          초기화
        </button>
        <button className="w-24 h-10 bg-[#0CAF60] text-white rounded-md">
          저장
        </button>
      </div>
      <Table register={register} />
    </div>
  );
}
