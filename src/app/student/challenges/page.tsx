"use client";

import React from "react";
import ChallengeSection from "./components/ChallengeSection";

// Challenge data arrays moved to a separate data file
const activeChallenges = [
  {
    label: "Physical",
    labelColor: "indigo-600",
    progress: "1500",
    total: "2000",
    icon: "/images/student/checkin.png",
    date: "13 Sep - 19 Sep 2024 (ends today)",
    title: "Walk around 2000 steps a day",
    points: "You will earn X house points",
    isJoined: true,
    showDetails: true,
  },
  {
    label: "Physical",
    labelColor: "indigo-600",
    progress: "2",
    total: "7",
    icon: "/images/student/checkin.png",
    date: "13 Sep - 19 Sep 2024 (ends today)",
    title: "Get enough sleep (8 hours) every night",
    points: "You will earn X house points",
    isJoined: true,
    showDetails: true,
    buttonAction: () => console.log("Joined clicked"),
  },
];

const newChallenges = [
  {
    label: "Physical",
    labelColor: "indigo-600",
    progress: "0",
    total: "200",
    icon: "/images/student/checkin.png",
    date: "19 Sep - 8 Okt 2024 (ends in 9 days)",
    title: "Having 200 kcal burned",
    points: "Earn 4 house points",
    buttonText: "Join Challenge",
    buttonAction: () => console.log("Join Challenge clicked"),
  },
  {
    label: "Educational",
    labelColor: "teal-700",
    progress: "5",
    total: "5",
    icon: "/images/student/checkin.png",
    date: "19 Sep - 8 Okt 2024 (ends in 14 days)",
    title: "Read 5 books",
    points: "Earn 3 house points",
    buttonText: "Join Challenge",
    buttonAction: () => console.log("Join Challenge clicked"),
  },
];

const pastChallenges = [
  {
    label: "Environmental",
    labelColor: "neutral-500",
    progress: "5",
    total: "5",
    icon: "/images/student/checkin.png",
    date: "06 Sep - 12 Sep 2024",
    title: "Recycle 5 plastic water bottles around school",
    points: "You earned 3 house points",
  },
  {
    label: "Physical",
    labelColor: "neutral-500",
    progress: "5",
    total: "7",
    icon: "/images/student/checkin.png",
    date: "29 Aug - 05 Sep 2024",
    title: "Get enough sleep (8 hours) every night",
    points: "Oops, you did not finish on-time",
  },
  {
    label: "Educational",
    labelColor: "neutral-500",
    progress: "5",
    total: "5",
    icon: "/images/student/checkin.png",
    date: "12 Aug - 12 Sep 2024",
    title: "Read 5 books a month",
    points: "You earned 3 house points",
  },
  {
    label: "Physical",
    labelColor: "neutral-500",
    progress: "7",
    total: "7",
    icon: "/images/student/checkin.png",
    date: "29 Aug - 05 Sep 2024",
    title: "Get enough sleep (8 hours) every night",
    points: "You earned 8 house points",
  },
  {
    label: "Environmental",
    labelColor: "neutral-500",
    progress: "5",
    total: "5",
    icon: "/images/student/checkin.png",
    date: "06 Sep - 12 Sep 2024",
    title: "Recycle 5 plastic water bottles around school",
    points: "You earned 3 house points",
  },
];

const Challenges = () => {
  return (
    <main className="flex flex-col bg-white">
      <div className="p-10 w-full max-md:px-5">
        <div className="space-y-10">
          <div className="flex flex-wrap gap-10">
            <ChallengeSection
              title="Active challenges"
              challenges={activeChallenges}
            />
            <ChallengeSection
              title="Join new challenges"
              challenges={newChallenges}
            />
          </div>
          <ChallengeSection
            title="Past challenges"
            challenges={pastChallenges}
          />
        </div>
      </div>
    </main>
  );
};

export default Challenges;
