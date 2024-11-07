import React from "react";
import Profile from "./components/Profile";
import HousePoints from "./components/HousePoints";
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col items-center p-3 min-w-[240px] w-[369px] h-screen">
      <div className="flex overflow-hidden flex-col flex-1 items-center p-5 max-w-full bg-[#F5F5F5] bg-opacity-80 rounded-[36px] w-[345px] h-full">
        <section className="flex flex-col gap-5 justify-center px-0 py-5 w-full bg-white rounded-3xl max-w-[305px]">
          <Profile />
          <HousePoints />
        </section>
        <nav className="flex flex-col mt-5 w-full max-w-[305px]">
          <NavItem title="Check-Ins" imageUrl="/images/student/checkin.png" />
          <NavItem
            title="Challenges"
            imageUrl="/images/student/challenge.png"
            badgeCount={2}
          />
          <NavItem title="My class" imageUrl="/images/student/myclass.png" />
          <NavItem title="Videos" imageUrl="/images/student/video.png" />
          <NavItem title="Get help" imageUrl="/images/student/gethelp.png" />
        </nav>
      </div>
      <Footer />
    </aside>
  );
};

export default Sidebar;
