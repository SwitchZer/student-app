import { Card } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

type TicketCardProps = {
  image: string;
  name: string;
  role: string;
  ticketNo: string;
  isActive?: boolean;
  category: {
    icon: string;
    label: string;
  };
};

const TicketCard = ({
  image,
  name,
  role,
  ticketNo,
  isActive,
  category,
}: TicketCardProps) => (
  <Card className="flex flex-wrap gap-10 px-5 py-4 w-full">
    <div className="flex gap-5 items-start text-xs font-medium min-w-[240px] text-neutral-500">
      <Image
        src={image}
        alt={name}
        width={67}
        height={67}
        className="object-contain"
      />
      <div className="flex flex-col justify-center items-start w-40">
        <div className="text-center text-neutral-800">{name}</div>
        <div className="mt-2 text-xs leading-tight">{role}</div>
        {isActive ? (
          <div className="flex gap-1 items-center px-2 py-1 mt-2 text-teal-700 whitespace-nowrap rounded-lg border border-teal-700 border-solid bg-green-50 bg-opacity-90">
            <Image
              src="/images/student/tick-01.svg"
              alt="Active"
              width={15}
              height={15}
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[15px]"
            />
            <div className="self-stretch my-auto">Active</div>
          </div>
        ) : (
          <div className="flex gap-1 items-center px-2 py-1 mt-2 text-dim-black whitespace-nowrap rounded-lg border border-gray-light-102 border-solid">
            <div className="self-stretch my-auto">Closed</div>
          </div>
        )}
        <div className="mt-2 text-xs leading-tight">{ticketNo}</div>
      </div>
      <div className="flex gap-1 px-2.5 py-1.5 rounded-2xl border border-dim-black">
        <Image
          src={category.icon}
          alt={category.label}
          width={16}
          height={16}
        />
        <span className="text-xs text-neutral-700">{category.label}</span>
      </div>
    </div>
  </Card>
);

export default TicketCard;
