"use client";
import SubmitTicket from "./components/SubmitTicket";
import HelpCenter from "./components/HelpCenter";

export default function GetHelpPage() {
  return (
    <div className="flex flex-wrap flex-1 gap-10 items-start size-full max-md:max-w-full">
      <SubmitTicket />
      <HelpCenter />
    </div>
  );
}
