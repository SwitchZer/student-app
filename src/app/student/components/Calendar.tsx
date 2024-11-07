"use client";

import { useState } from "react";

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

export const Calendar = ({ onDateSelect }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}
        </h2>
        <div className="flex gap-2"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
        {/* Calendar cells would go here - leaving empty as requested */}
      </div>
    </div>
  );
};
