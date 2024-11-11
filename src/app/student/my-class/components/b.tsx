import React from 'react';

interface LeaderboardCardProps {
  rank: number;
  name: string;
  score: number;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ rank, name, score }) => {
  return (
    <div data-layername="leaderboardCard" className="flex flex-col gap-2 justify-center p-4 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
      <div data-layername="details" className="flex gap-5 items-center w-full max-md:max-w-full">
        <div data-layername="4" className="self-stretch my-auto w-5 text-base font-medium leading-loose text-neutral-800">
          {rank}
        </div>
        <div data-layername="profile" className="flex gap-3 items-center self-stretch my-auto">
          <div data-layername="appProfile" className="flex gap-2.5 items-center self-stretch my-auto w-10">
            <div data-layername="profile" className="flex flex-col items-start self-stretch my-auto w-[45px]">
              <div className="flex shrink-0 w-full h-10 rounded-full bg-zinc-100 bg-opacity-80 fill-zinc-100 fill-opacity-80" />
            </div>
          </div>
          <div data-layername="container" className="self-stretch my-auto text-base font-medium leading-loose whitespace-nowrap text-neutral-600">
            {name}
          </div>
        </div>
        <div data-layername="label" className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-neutral-500">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08eee94d616829c61ab45445e4d99f5cf047460a60eac51b7fb4d1a907a0880?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]" />
          <div data-layername="7" className="self-stretch my-auto">
            {score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;