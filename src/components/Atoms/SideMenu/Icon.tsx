import Image from "next/image";
import side from "@/public/assets/img/side.png";

export default function Icon() {
  return (
    <div className="w-[100px] h-[100px] object-cover overflow-hidden min-h-1 rounded-full my-0 mx-auto">
      <Image
        src={side}
        width={100}
        height={100}
        loading="lazy"
        alt="프로필 이미지"
      />
    </div>
  );
}
