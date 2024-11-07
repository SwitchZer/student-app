import React from "react";
import Image from "next/image";

const HousePoints: React.FC = () => (
  <div className="flex gap-1.5 justify-center items-center self-center px-2.5 py-1.5 mt-5 text-xs leading-tight bg-orange-50 rounded-[50px]">
    <div className="flex justify-center items-center self-stretch my-auto text-right whitespace-nowrap text-neutral-900">
      <Image
        loading="lazy"
        src="/images/student/coin.png"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
        width={13}
        height={13}
      />
      <span className="self-stretch my-auto text-black-101">12</span>
    </div>
    <span className="self-stretch my-auto text-gray-light-101">
      House points
    </span>
  </div>
);

export default HousePoints;
