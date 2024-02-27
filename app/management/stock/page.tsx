"use client";

import TabMenu from "@/src/components/MoleCules/TabMenu/TabMenu";
import Table from "@/src/components/MoleCules/Table/Table";
import { useFieldArray, useForm } from "react-hook-form";

interface stockItem {
  stockItem: [];
}

interface rowProps {
  day: string;
  id: string;
  itemId: string;
  month: string;
  name: string;
  number: string;
  shop: string;
  year: string;
}

export default function Stock() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onSubmit",
    defaultValues: {
      stockItem: [
        {
          name: "",
          shop: "",
          itemId: "",
          year: "",
          month: "",
          day: "",
          number: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "stockItem",
    control, // control props comes from useForm (optional: if you are using FormContext)
  });

  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  return (
    <div className="w-full px-4">
      <TabMenu />
      <div className="w-full flex justify-end items-center">
        <button
          className="w-[39px] h-[39px] mr-3 bg-[#0CAF60] text-white text-3xl rounded-full text-center"
          onClick={() =>
            append({
              name: "",
              shop: "",
              itemId: "",
              year: "",
              month: "",
              day: "",
              number: "",
            })
          }
        >
          +
        </button>
        <button
          className="w-[39px] h-[39px] mr-3 bg-[#0CAF60] text-white text-3xl  rounded-full"
          onClick={() => remove()}
        >
          -
        </button>
        <button
          className="w-24 h-10 mr-3 bg-[#777777] text-white rounded-md"
          onClick={() => remove()}
        >
          초기화
        </button>
        <button
          className="w-24 h-10 bg-[#0CAF60] text-white rounded-md"
          onClick={handleSubmit(onSubmit)}
        >
          저장
        </button>
      </div>
      <Table fields={fields} register={register} />
    </div>
  );
}
