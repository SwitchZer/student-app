import React from "react";
import Image from "next/image";

const Profile: React.FC = () => (
  <div className="flex flex-col px-5 w-full text-center">
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px]">
        <Image
          loading="lazy"
          src="/images/student/profile.png"
          alt="Profile picture of Ahmad Momen"
          className="object-contain self-center rounded-full aspect-square w-[72px]"
          width={72}
          height={72}
        />
        <h2 className="mt-3 text-base font-medium leading-loose text-black-101">
          Ahmad Momen
        </h2>
        <p className="mt-3 text-xs leading-tight text-gray-light-101">
          CLASS 10-C
        </p>
      </div>
    </div>
  </div>
);

export default Profile;
