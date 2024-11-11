import React from 'react';
import LeaderboardCard from './LeaderboardCard';
import ProgressBar from './ProgressBar';
import AppreciationCorner from './AppreciationCorner';
import ProfileCard from './ProfileCard';

interface LeaderboardModuleProps {}

const LeaderboardModule: React.FC<LeaderboardModuleProps> = () => {
  const leaderboardData = [
    { rank: 4, name: 'Sidney', score: 7 },
    { rank: 5, name: 'Rupi', score: 5 },
    { rank: 5, name: 'Philip', score: 4 },
    { rank: 5, name: 'Martina', score: 4 },
  ];

  const progressBarData = [
    { name: 'Alexandra', score: 11, color: 'bg-red-400', rank: 2 },
    { name: 'Momen', score: 12, color: 'bg-orange-300', rank: 1, isMe: true },
    { name: 'Regulus', score: 10, color: 'bg-teal-300', rank: 3 },
  ];

  const profileCardData = [
    { name: 'Charlie White', class: 'CLASS 8B', badgeType: 'Risk-taker', badgeIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/719c52eeafbf05d4e60bf9a2a8388e252336b5469b11c59bf7d12017ba7a5e82?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035' },
    { name: 'Charlie White', class: 'CLASS 8B', badgeType: 'Knowledgeable', badgeIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e686200bfdb44e6e9e111edd790563b1ad116d2bfc17500ba92a8a3ed605ae4?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035' },
    { name: 'Charlie White', class: '', badgeType: 'Responsible', badgeIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc6b424f50d71df8f3e9188726bc3bd568f81bcfcc0642433737a8f8e08a2bd2?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035' },
  ];

  return (
    <div data-layername="myClass" className="flex overflow-hidden flex-col justify-center bg-white">
      <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
        <section className="flex flex-col flex-1 shrink justify-center p-10 basis-0 bg-stone-50 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-3 justify-center items-end py-6 pr-3 pl-6 w-full bg-white rounded-3xl shadow-sm max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                  <LeaderboardCard rank={4} name="Name" score={0} />
                  <div data-layername="leaderboard" className="flex flex-col gap-2 justify-center p-4 mt-10 w-full bg-white rounded-2xl max-md:max-w-full">
                    <div data-layername="leaderboard" className="flex gap-4 w-full max-md:max-w-full">
                      {progressBarData.map((data, index) => (
                        <ProgressBar key={index} {...data} />
                      ))}
                    </div>
                  </div>
                  <div data-layername="content" className="flex flex-col mt-10 w-full max-md:max-w-full">
                    {leaderboardData.map((data, index) => (
                      <LeaderboardCard key={index} {...data} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col w-1.5 rounded-lg">
                  <div className="flex flex-col pb-40 rounded-lg bg-neutral-200 bg-opacity-90 max-md:pb-24">
                    <div className="flex shrink-0 mb-0 rounded-lg bg-neutral-600 h-[323px] max-md:mb-2.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                <h2 data-layername="appreciationCorner" className="text-2xl font-medium leading-none text-stone-950">
                  Appreciation corner
                </h2>
                <AppreciationCorner />
                <div className="flex overflow-hidden flex-wrap flex-1 gap-3 items-start py-6 pr-3 pl-6 mt-4 bg-white rounded-3xl shadow-sm size-full max-md:pl-5 max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="flex self-start text-sm font-medium leading-loose text-center whitespace-nowrap min-h-[40px]">
                      <div data-layername="tabContainer" className="flex h-full bg-zinc-100 bg-opacity-80 rounded-[999px]">
                        <button data-layername="buttons" className="flex gap-2.5 justify-center items-center px-5 py-1 h-full text-white bg-stone-950 rounded-[100px]">
                          <span data-layername="btnContent" className="gap-1.5 self-stretch my-auto">
                            Received
                          </span>
                        </button>
                        <button data-layername="buttons" className="flex gap-2.5 justify-center items-center px-5 py-1 h-full bg-zinc-100 bg-opacity-80 rounded-[100px] text-neutral-500">
                          <span data-layername="btnContent" className="gap-1.5 self-stretch my-auto">
                            Given
                          </span>
                        </button>
                      </div>
                    </div>
                    {profileCardData.map((data, index) => (
                      <ProfileCard key={index} {...data} />
                    ))}
                  </div>
                  <div className="flex flex-col w-1.5 rounded-lg">
                    <div className="flex flex-col pb-72 rounded-lg bg-neutral-200 bg-opacity-90 max-md:pb-24">
                      <div className="flex shrink-0 mb-0 h-48 rounded-lg bg-neutral-600 max-md:mb-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaderboardModule;