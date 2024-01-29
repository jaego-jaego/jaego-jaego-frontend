"use client";

import BaseButton from "@/src/components/Atoms/Base/BaseButton";
import BaseError from "@/src/components/Atoms/Base/BaseError";
import BaseInput from "@/src/components/Atoms/Base/BaseInput";
import LoginSideMenuList from "@/src/components/MoleCules/LoginSideMenu/LoginSideList";
import useSignInValidation from "@/src/hooks/useSignInValidation";
import { openModal } from "@/src/redux/features/modalSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";

export default function Login() {
  const { schema } = useSignInValidation();
  const dispatch = useDispatch();
  const [passwordMasking, setPasswordMasking] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      businessNumber: "",
      password: "",
    },
  });

  // 비밀번호 마스킹
  const handlePasswordClick = () => {
    setPasswordMasking(!passwordMasking);
  };

  const handleAdminClick = () => {
    dispatch(
      openModal({
        modalType: "AdminLoginModal",
        isOpen: true,
      })
    );
  };

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
                      placeholder={"사업자번호 14자리를 입력해주세요"}
                      register={register("businessNumber")}
                    />
                    <BaseError>{errors.businessNumber?.message}</BaseError>
                  </div>
                </div>
                <div className="flex items-center mb-11">
                  <label
                    htmlFor="password"
                    className="font-poppins text-xl font-normal leading-normal mr-8"
                  >
                    패스워드
                  </label>
                  <div className="w-80 h-20 relative">
                    <BaseInput
                      size="sm"
                      color="mint"
                      id="password"
                      type={passwordMasking ? "password" : "text"}
                      register={register("password")}
                    />
                    <BaseError>{errors.password?.message}</BaseError>
                    {passwordMasking ? (
                      <div
                        className="absolute top-6 right-5"
                        onClick={handlePasswordClick}
                      >
                        <VscEye size={25} />
                      </div>
                    ) : (
                      <div
                        className="absolute top-6 right-5"
                        onClick={handlePasswordClick}
                      >
                        <VscEyeClosed size={25} />
                      </div>
                    )}
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
          <div className="absolute bottom-10 right-10">
            <BaseButton
              color="transparency"
              size="xs"
              onClick={handleAdminClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
