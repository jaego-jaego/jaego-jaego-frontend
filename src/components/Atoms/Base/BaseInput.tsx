import { UseFormRegisterReturn } from "react-hook-form";

type Color = "mint";
type Size = "sm";
type Type = "password" | "text";

interface BaseInputProps {
  type: Type;
  color: Color;
  size: Size;
  id: string;
  register?: UseFormRegisterReturn;
}

export default function BaseInput({
  color,
  size,
  id,
  register,
  type,
}: BaseInputProps) {
  let combinedClassName = ""; // 이 변수에 className을 중첩시킨다.
  console.log("register", register);
  switch (color) {
    case "mint": {
      combinedClassName =
        "w-full h-full mr-2 rounded-2xl border border-mint bg-mint font-semibold hover:bg-hover-mint focus:ring-ring-mint";
      break;
    }
  }

  switch (size) {
    case "sm": {
      combinedClassName += "py-1.5 px-3 text-xl focus:ring-4";
      break;
    }
  }

  return (
    <input
      className={`${combinedClassName}`}
      id={id}
      type={type}
      {...register}
    />
  );
}
