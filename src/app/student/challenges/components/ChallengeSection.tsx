import React from "react";
import ChallengeCard from "./ChallengeCard";

interface Challenge {
  label: string;
  labelColor: string;
  progress: string;
  total: string;
  icon: string;
  date: string;
  title: string;
  points: string;
  buttonText?: string;
  buttonAction?: () => void;
  showDetails?: boolean;
}

interface ChallengeSectionProps {
  title: string;
  challenges: Challenge[];
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  title,
  challenges,
}) => {
  return (
    <section className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <h2 className="flex-wrap gap-4 self-stretch w-full text-2xl font-medium leading-none text-black-103 max-md:max-w-full">
        {title}
      </h2>
      <div className="flex overflow-x-auto flex-wrap flex-1 gap-3 mt-4 size-full max-md:max-w-full">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
      <div className="flex flex-col mt-4 max-w-full rounded-lg w-[488px]">
        <div className="flex flex-col items-start rounded-lg bg-neutral-200 bg-opacity-90 max-md:pr-5 max-md:max-w-full">
          <div className="flex shrink-0 max-w-full h-1.5 rounded-lg bg-neutral-600 w-[323px]" />
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
