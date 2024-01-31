import { UseFormRegisterReturn } from "react-hook-form";

type Color = "mint" | "gray";
type Size = "sm";
type Type = "password" | "text";

interface BaseInputProps {
  type: Type;
  color: Color;
  size: Size;
  id: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  onSubmitSearch?:any
}

export default function BaseInput({
  color,
  size,
  id,
  register,
  type,
  placeholder,
  onSubmitSearch
}: BaseInputProps) {
  let combinedClassName = ""; // 이 변수에 className을 중첩시킨다.
  switch (color) {
    case "mint": {
      combinedClassName =
        "w-full h-full mr-2 rounded-2xl border border-mint font-semibold hover:bg-hover-mint";
      break;
    }
    case "gray": {
      combinedClassName =
        "w-full h-full mr-2 rounded-md border bg-[#D9D9D9] font-semibold hover:bg-hover-mint";
      break;
    }
  }

  switch (size) {
    case "sm": {
      combinedClassName += "py-1.5 px-3 text-xl focus:ring-2";
      break;
    }
  }

  return (
    <input
      className={`${combinedClassName}`}
      id={id}
      type={type}
      placeholder={placeholder}
      onKeyDown={onSubmitSearch}
      {...register}
    />
  );
}
