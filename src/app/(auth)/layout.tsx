import Image from "next/image";
import React from "react";
import Logo from "../../assets/svgs/logo.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex min-h-screen relative flex-col"
      style={{
        backgroundImage: "url('/images/bg-login.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80" />
      <div className="relative z-10 flex items-center justify-start w-full py-6 px-10">
        <Image
          src={Logo}
          alt="Arrow Right"
          width={128}
          height={28}
          className="z-10"
        />
      </div>
      <div className="justify-center items-center flex flex-1">{children}</div>
    </div>
  );
};

export default Layout;
