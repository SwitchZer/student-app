"use client";

import React from "react";
import Profile from "./components/Profile";
import HousePoints from "./components/HousePoints";
import NavItem from "./components/NavItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="flex flex-col items-center p-3 min-w-[240px] w-[369px] h-screen">
      <div className="flex overflow-hidden flex-col flex-1 items-center p-5 max-w-full bg-[#F5F5F5] bg-opacity-80 rounded-[36px] w-[345px] h-full">
        <section className="flex flex-col gap-5 justify-center px-0 py-5 w-full bg-white rounded-3xl max-w-[305px]">
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
        </section>
        <nav className="flex flex-col mt-5 w-full max-w-[305px]">
          <Link href="/student/check-in">
            <NavItem title="Check-Ins" imageUrl="/images/student/checkin.png" />
          </Link>
          <Link href="/student/challenges">
            <NavItem
              title="Challenges"
              imageUrl="/images/student/challenge.png"
              badgeCount={2}
            />
          </Link>
          <Link href="/student/my-class">
            <NavItem title="My class" imageUrl="/images/student/myclass.png" />
          </Link>
          <Link href="/student/videos">
            <NavItem title="Videos" imageUrl="/images/student/video.png" />
          </Link>
          <Link href="/student/get-help">
            <NavItem title="Get help" imageUrl="/images/student/gethelp.png" />
          </Link>
        </nav>
      </div>
      <footer className="flex gap-3 justify-center items-center mt-5">
        <Image
          loading="lazy"
          src="/images/student/logo1.png"
          alt="Sponsor logo 1"
          className="object-contain shrink-0 self-stretch my-auto aspect-[4.5] w-[90px]"
          width={90}
          height={40}
        />
        <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-black border-opacity-20 h-[43px]" />
        <Image
          loading="lazy"
          src="/images/student/logo2.png"
          alt="Sponsor logo 2"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.72] w-[81px]"
          width={81}
          height={47}
        />
      </footer>
    </aside>
  );
};

export default Sidebar;
