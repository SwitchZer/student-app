"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css"; // For additional custom styling

// Sample emoji data for specific dates
const emojiData = {
  "2023-09-01": "😊",
  "2023-09-02": "😊",
  "2023-09-10": "😌",
  "2023-09-18": "😕",
  "2023-09-19": "+",
};

function CustomCalendar() {
  return (
    <div className="calendar-container max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
      <Calendar
        tileContent={({ date }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            Hello
          </div>
        )}
      />
    </div>
  );
}

export default CustomCalendar;
