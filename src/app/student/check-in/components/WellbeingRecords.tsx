import Image from "next/image";
import { Button } from "@material-tailwind/react";
import WellbeingCard from "./WellbeingCard";

const WellbeingRecords = () => {
  const records = [
    {
      date: "18 Sep 2024, 23:23",
      mood: "Negative",
      tags: ["My community", "My friends", "My school"],
    },
    {
      date: "17 Sep 2024, 23:23",
      mood: "Neutral",
      tags: ["My community", "My friends", "My school"],
    },
    {
      date: "15 Sep 2024, 23:23",
      mood: "Negative",
      tags: ["My community", "My friends", "My school"],
    },
  ] as const;

  return (
    <div className="w-1/3 bg-background rounded-[25px] p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[26px] leading-[34px] font-medium text-black-102">
          Wellbeing records
        </h2>
        <Image
          src="/images/student/arrowright.svg"
          alt="Image icon"
          width={24}
          height={24}
          className="p-7px p-4px p-7px p-4px"
        />
      </div>
      <Button className="w-full py-[22px] pr-5 pl-[16px] bg-light-orange text-black-102 rounded-lg flex items-center mb-6">
        <Image
          src="/images/student/smileplus.svg"
          alt="Start your check-in icon"
          width={50}
          height={50}
          className="w-[50px] h-[50px] mr-2"
        />
        <span>Start your check-in</span>
      </Button>
      <div className="space-y-6">
        {records.map((record, index) => (
          <WellbeingCard key={index} {...record} />
        ))}
      </div>
    </div>
  );
};

export default WellbeingRecords;
