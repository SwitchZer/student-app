import React from "react";
import TicketCard from "./TicketCard";

export default function HelpCenter() {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <div className="text-2xl font-medium leading-none text-stone-950">
        Your help center
      </div>

      <div className="flex flex-col gap-6 mt-6">
        <TicketCard
          image="/images/student/FM.png"
          name="Sara Andersen"
          role="Principal"
          ticketNo="#TICKET_NO_123"
          isActive={true}
          category={{
            icon: "/images/student/Tags.png",
            label: "My friends",
          }}
        />

        <TicketCard
          image="/images/student/FM.png"
          name="Sara Andersen"
          role="Principal"
          ticketNo="#TICKET_NO_000"
          isActive={false}
          category={{
            icon: "/images/student/Tags.png",
            label: "My school",
          }}
        />
      </div>
    </div>
  );
}
