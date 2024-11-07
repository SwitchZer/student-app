"use client";

import Image from "next/image";
import Logo from "../../assets/svgs/logo-black.svg";
import Typography from "@/components/ui/typography";

const Badge = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <div
      className={`${
        isActive ? "bg-white" : "bg-dim-black"
      } rounded-full px-[14px] py-[10px]`}
    >
      <Typography
        className={` ${
          isActive ? "text text-[16px]" : "text-dim-gray text-[14px]"
        } font-medium`}
      >
        {children}
      </Typography>
    </div>
  );
};

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[800px] bg-background">
      <div className="relative z-10 flex items-center justify-start w-full pt-[30px] pb-[22px] px-10 ">
        <Image
          src={Logo}
          alt="Arrow Right"
          width={128}
          height={28}
          className="z-10"
        />
      </div>

      <div className="relative w-full h-[300px]">
        <Image
          src="/images/admin-bg.webp"
          alt="Arrow Right"
          fill
          className="z-10 object-cover"
        />
      </div>

      <div className="absolute z-10 top-[82px] right-0 left-0 bottom-0 flex">
        <div className="mx-auto w-full max-w-[1256px]">
          <Typography className="text-[26px] font-medium text-white pt-16">
            Super admin panel
          </Typography>

          <div className="flex gap-4 py-8">
            {[
              "Schools",
              "Checkin questions",
              "Challenges",
              "Videos",
              "Categories",
            ].map((label, index) => (
              <Badge key={index} isActive={label === "Schools"}>
                {label}
              </Badge>
            ))}
          </div>

          <div className="bg-white rounded-lg p-10 min-h-2000px">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
