"use client";

import Calendar from "./components/Calendar";
import WellbeingRecords from "./components/WellbeingRecords";

const CheckInPage = () => {
  return (
    <div className="flex h-[1vh]">
      <div className="flex-1 p-6">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-[20px] leading-[26px] text-black-102 font-medium">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h1>
        </div>
        <div className="flex">
          <Calendar />
          <WellbeingRecords />
        </div>
      </div>
    </div>
  );
};

export default CheckInPage;
