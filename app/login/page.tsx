"use client";

import BaseButton from "@/src/components/Atoms/Base/BaseButton";
import BaseInput from "@/src/components/Atoms/Base/BaseInput";
import LoginSideMenuItem from "@/src/components/Atoms/LoginSideMenu/LoginSideItem";
import SideList from "@/src/components/Atoms/SideMenu/SideList";
import LoginSideMenuList from "@/src/components/MoleCules/LoginSideMenu/LoginSideList";
import SideMenu from "@/src/components/MoleCules/Menu/SideMenu";
import useSignInValidation from "@/src/hooks/useSignInValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const { schema } = useSignInValidation();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      businessNumber: "",
      password: "",
    },
  });

  const handleLoginClick = (data: any) => {
    console.log("출력 데이터", data);
  };
  //   background: linear-gradient(180deg, #7BA5B8 0%, #35CF98 100%);
  return (
    <div className="relative w-screen h-screen min-h-screen overflow-hidden bg-gradient-to-tr from-[#7BA5B8] to-[#35CF98]">
      <div className="flex">
        <div className="w-1/2 h-screen pt-20">
          <LoginSideMenuList />
        </div>
        <div className="relative w-1/2">
          <div className="w-128 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col rounded-3xl box-border pr-14 pl-8 bg-custom-gray">
              <h1 className="w-full text-center font-poppins text-2xl font-bold leading-normal my-16">
                사업자 로그인
              </h1>
              <form>
                <div className="flex items-center mb-9">
                  <label
                    htmlFor="businessNumber"
                    className="font-poppins text-xl font-normal leading-normal mr-2"
                  >
                    사업자 번호
                  </label>
                  <div className="w-80 h-20">
                    <BaseInput
                      id="businessNumber"
                      size="sm"
                      color="mint"
                      type="text"
                      register={register("businessNumber")}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-11">
                  <label
                    htmlFor="password"
                    className="font-poppins text-xl font-normal leading-normal mr-8"
                  >
                    패스워드
                  </label>
                  <div className="w-80 h-20">
                    <BaseInput
                      size="sm"
                      color="mint"
                      id="password"
                      type="password"
                      register={register("password")}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <BaseButton
                    color="blue"
                    size="sm"
                    className="mb-8"
                    onClick={handleSubmit(handleLoginClick)}
                  >
                    로그인
                  </BaseButton>
                </div>
                <Link href="/">
                  <p className="text-button-blue text-xl font-bold ml-8 mb-3">
                    사장님, 아직 재고재고에 계정이 없으신가요?
                  </p>
                </Link>
              </form>
            </div>

            <Image
              src={"/assets/img/loginImage.png"}
              className="absolute top-56 -right-20 -z-20"
              alt="Picture of me"
              width={511}
              height={487}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
