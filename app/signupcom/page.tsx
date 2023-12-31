"use client";

import BaseButton from "@/src/components/Atoms/Base/BaseButton";
import BaseInput from "@/src/components/Atoms/Base/BaseInput";
import useSignUpComValidation from "@/src/hooks/useSignUpComValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const { schema } = useSignUpComValidation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      businessNumber: "",
      ceoName: "",
      startDate: "",
      companyName: "",
      password: "",
    },
  });

  const handleCpLookUpClick = () => {};

  return (
    <div className="w-screen min-h-screen relative bg-gradient-to-tr from-[#7BA5B8] to-[#35CF98]">
      <div className="w-128 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col border-4 border-solid rounded-3xl box-border pr-0 pl-0 bg-custom-gray">
          <h1 className="w-full text-center font-poppins text-2xl font-bold leading-normal my-16">
            사업자 회원가입
          </h1>
          <form action="" className="flex flex-col items-center">
            <div className="w-full flex justify-end mr-14">
              <div className="text-center h-8">
                <h2>*는 필수 입력값입니다.</h2>
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="businessNumber"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  *사업자번호
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  id="businessNumber"
                  type="text"
                  size="sm"
                  color="mint"
                  register={register("businessNumber")}
                />
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="ceoName"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  *대표자성명
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  id="ceoName"
                  type="text"
                  size="sm"
                  color="mint"
                  register={register("ceoName")}
                />
              </div>
            </div>
            <div className="flex items-between mb-2">
              <div className="w-40">
                <label
                  htmlFor="startDate"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  *개업일자
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  id="startDate"
                  type="text"
                  size="sm"
                  color="mint"
                  register={register("startDate")}
                />
              </div>
            </div>
            <div className="w-full flex justify-end mr-14">
              <div className="text-center h-10">
                <BaseButton
                  color="green"
                  size="ssm"
                  className="mb-0"
                  onClick={handleCpLookUpClick}
                >
                  가게정보 불러오기
                </BaseButton>
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="password"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  *패스워드
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  type="password"
                  size="sm"
                  color="mint"
                  id="password"
                  register={register("password")}
                />
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="companyName"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  *상호
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  type="text"
                  id="companyName"
                  size="sm"
                  color="mint"
                  register={register("companyName")}
                />
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="companyAddress"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  매장주소
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  type="text"
                  id="companyAddress"
                  size="sm"
                  color="mint"
                />
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="companyCategory"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  주업태명
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  type="text"
                  id="companyCategory"
                  size="sm"
                  color="mint"
                />
              </div>
            </div>
            <div className="flex items-between mb-9">
              <div className="w-40">
                <label
                  htmlFor="companyType"
                  className="font-poppins text-2xl font-normal leading-normal mr-2"
                >
                  주종목명
                </label>
              </div>
              <div className="w-80 h-10">
                <BaseInput
                  type="text"
                  id="companyType"
                  size="sm"
                  color="mint"
                />
              </div>
            </div>
            <div className="text-center">
              <BaseButton
                onClick={() => {}}
                color="blue"
                size="sm"
                className="mb-8"
              >
                회원가입
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
