type Color = "blue" | "green" | "white" | "indigo";
type Size = "sm" | "ssm" | "lg" | "custom";

interface BaseButtonProps {
  color: Color;
  size: Size;
  children: string;
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
      combineClassName = "font-bold rounded-2xl bg-green-700 text-white text";
      break;
    case "white":
      combineClassName = "font-bold rounded-2xl bg-white text-black text";
      break;
  }

  switch (size) {
    case "sm":
      combineClassName += " w-64 h-16";
      break;
    case "ssm":
      combineClassName += " w-48 h-8";
      break;
    case "lg":
      combineClassName += " w-[48%] h-[75px]";
  }
  return (
    <button onClick={onClick} className={`${combineClassName} ${className}`}>
      {children}
    </button>
  );
}
