"use client";

import { Calendar } from "./components/Calendar";
import { WellbeingRecords } from "./components/WellbeingRecords";
import { Header } from "./components/Header";

export default function StudentDashboard() {
  return (
    <div className="flex-1 p-6">
      <Header date="Friday, 19 June 2024" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Calendar onDateSelect={(date) => console.log(date)} />
        <WellbeingRecords />
      </div>
    </div>
  );
}
