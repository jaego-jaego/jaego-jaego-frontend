type Color = "blue" | "green" | "white" | "indigo" | "transparency";
type Size = "xs" | "sm" | "ssm" | "lg" | "custom" | "modal-button";

interface BaseButtonProps {
  color: Color;
  size: Size;
  children?: string;
  className?: string;
  onClick?: () => void;
}

export default function BaseButton({
  color,
  size,
  children,
  className,
  onClick,
}: BaseButtonProps) {
  let combineClassName = "";
  switch (color) {
    case "blue":
      combineClassName = "font-bold rounded-2xl bg-blue-700 text-white text";
      break;
    case "green":
      combineClassName =
        "font-bold rounded-2xl bg-custom-green text-white text";
      break;
    case "white":
      combineClassName = "font-bold rounded-2xl bg-white text-black text";
      break;

    case "transparency":
      combineClassName = "font-bold   bg-custom-gray  text-black text";
      break;
  }

  switch (size) {
    case "xs":
      combineClassName += " w-16 h-16";
      break;
    case "sm":
      combineClassName += " w-64 h-16";
      break;
    case "ssm":
      combineClassName += " w-48 h-8";
      break;
    case "lg":
      combineClassName += " w-[48%] h-[75px]";
    case "modal-button":
      combineClassName += " w-24 h-12";
  }
  return (
    <button onClick={onClick} className={`${combineClassName} ${className}`}>
      {children}
    </button>
  );
}
