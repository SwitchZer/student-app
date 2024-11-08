"use client ";

import Image from "next/image";
import { Card } from "@material-tailwind/react";
import Input from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Select from "@/components/ui/select";

type StaffCardProps = {
  image: string;
  name: string;
  role: string;
};

const StaffCard = ({ image, name, role }: StaffCardProps) => (
  <Card className="flex flex-col flex-1 shrink self-stretch px-2 py-4 my-auto bg-white rounded-2xl shadow-sm basis-0">
    <Image
      src={image}
      alt={name}
      width={67}
      height={67}
      className="object-contain self-center"
    />
    <div className="flex flex-col items-center mt-1.5 w-full">
      <div className="text-xs font-medium leading-none text-neutral-800">
        {name}
      </div>
      <div className="text-xs leading-tight text-neutral-500">{role}</div>
    </div>
  </Card>
);

export default function SubmitTicket() {
  const { control } = useForm();
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] pt-[40px]">
      <div className="text-[26px] leading-[32px] font-medium text-stone-950 text-black-103">
        Get help
      </div>

      <div className="flex flex-wrap gap-2 items-center px-1.5 py-1 mt-4 w-full text-base font-medium leading-loose rounded-lg text-black-104">
        <Image
          src="/images/student/ticket-03.png"
          alt="Submit ticket"
          width={24}
          height={24}
          className="object-contain"
        />
        <div>Submit a new ticket</div>
      </div>

      <div className="flex flex-col gap-3 justify-center py-4 px-4 my-4 w-full rounded-xl bg-stone-50 bg-[#F5F5F5]">
        <div className="text-sm font-medium leading-loose pl-1 text-gray-light-102">
          Who would you like to ask for help?
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-3 w-full">
          <StaffCard
            image="/images/student/FM.png"
            name="Sara Andersen"
            role="Principal"
          />
          <StaffCard
            image="/images/student/FM.png"
            name="Fatima Al Riyabi"
            role="Counsellor"
          />
          <StaffCard
            image="/images/student/FM.png"
            name="Lamiaa Salam"
            role="Teacher"
          />
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <Select
          name="problem"
          label="Choose a Problem"
          placeholder="Choose one"
          options={[
            { label: "Homework Help", value: "homework_help" },
            { label: "Bullying", value: "bullying" },
            { label: "Class Schedule", value: "class_schedule" },
            { label: "Exam Preparation", value: "exam_preparation" },
            { label: "General Inquiry", value: "general_inquiry" },
          ]}
          control={control}
          variant="static"
        />
        <div className="flex items-center w-full">
          <Input
            name="detail"
            control={control}
            label="Type the Detail"
            placeholder="Enter Text"
            type="text"
            className="flex-1"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
