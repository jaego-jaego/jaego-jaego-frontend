import Link from "next/link";

interface LoginSideItemProps {
  item: string;
  route: string;
}

export default function LoginSideMenuItem({ item, route }: LoginSideItemProps) {
  return (
    <Link href={route}>
      <li className="w-full h-1/3 flex items-center justify-center bg-custom-gray border-2 border-solid text-color-white">
        <div className="font-bold text-3xl">{item}</div>
      </li>
    </Link>
  );
}
