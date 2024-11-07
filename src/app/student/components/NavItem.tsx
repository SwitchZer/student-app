import React from "react";
import Image from "next/image";

interface NavItemProps {
  title: string;
  imageUrl: string;
  badgeCount?: number;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  imageUrl,
  badgeCount,
  isActive,
}) => (
  <div
    className={`flex overflow-hidden gap-3 items-center px-5 text-black-102 py-3 mt-4 rounded-[20px] text-neutral-800 text-opacity-90 transition-colors duration-300 ease-in-out ${
      isActive ? "bg-yellow-300" : "bg-white hover:bg-[#FEEBC8]"
    }`}
  >
    <Image
      loading="lazy"
      src={imageUrl}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
      width={48}
      height={48}
    />
    <div className="flex-1 w-40">{title}</div>
    {badgeCount !== undefined && (
      <div className="flex justify-center items-center self-stretch px-3.5 my-auto text-xs font-medium leading-none text-white bg-black h-[33px] min-w-[16px] rounded-[99px] w-[33px]">
        {badgeCount}
      </div>
    )}
  </div>
);

export default NavItem;
