import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

const Calendar = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  //   const dates = Array.from({ length: 35 }, (_, i) => i + 29 - 5);

  return (
    <div className="w-2/3 bg-white  p-6 mr-6">
      <div className="flex justify-between items-center mb-4">
        <IconButton variant="text" className="text-gray-500">
          <Image
            src="/images/student/left.svg"
            alt="Left Arrow"
            width={12}
            height={6}
          />
        </IconButton>
        <h2 className="text-[26px] font-medium text-black-102 leading-9">
          September
        </h2>
        <IconButton variant="text" className="text-gray-500">
          <Image
            src="/images/student/right.svg"
            alt="Right Arrow"
            width={12}
            height={6}
          />
        </IconButton>
      </div>
      <div className="grid grid-cols-7 gap-4 text-center">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-[12px] font-normal leading-[15px] text-gray-light-102"
          >
            {day}
          </div>
        ))}
        {/* <div className="col-span-7 grid grid-cols-7 gap-4">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`text-gray-400 ${
                date === 19 ? "bg-yellow-400 text-white rounded-full" : ""
              }`}
            >
              {date}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Calendar;
