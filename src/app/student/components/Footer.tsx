import React from "react";
import Image from "next/image";

const Footer: React.FC = () => (
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
);

export default Footer;
