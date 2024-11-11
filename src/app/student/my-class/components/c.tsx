import React from "react";

interface ProgressBarProps {
  name: string;
  score: number;
  color: string;
  rank: number;
  isMe?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  name,
  score,
  color,
  rank,
  isMe,
}) => {
  return (
    <div
      data-layername="progressBar"
      className="flex flex-col flex-1 shrink basis-0"
    >
      <div data-layername="2nd" className="flex flex-col items-center w-full">
        {isMe && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df40bacb8da3660fcc599e4d067bf61155c37596bc02597fe016b8be16c28b21?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
            alt=""
            className="object-contain w-4 aspect-square"
          />
        )}
        <img
          loading="lazy"
          src={
            isMe
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/25f9bc8cb0a4fe388f89eed95917a7e8cb5099e9839f59cdd12471a27c0e45cc?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/243db03d5dccf5205c7ef5a39e73e9948c0ea401090b2bbb44c48af92823b2d2?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
          }
          alt={`${name}'s profile`}
          className="object-contain mt-1 w-10 rounded-full aspect-square"
        />
        <div
          data-layername="container"
          className="flex flex-col justify-center items-center mt-1 font-medium whitespace-nowrap"
        >
          <div
            data-layername="alexandra"
            className="text-base leading-loose text-neutral-600"
          >
            {name} {isMe && "(Me)"}
          </div>
          <div
            data-layername="label"
            className="flex gap-1 justify-center items-center px-1.5 py-1 text-xs leading-none rounded-lg border border-solid bg-stone-50 border-neutral-200 text-neutral-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98bfa637a7cb3fa2ce80d8abad279450441289c3704cd4b21fc2c5f5db0de960?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
            />
            <div data-layername="12" className="self-stretch my-auto">
              {score}
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="bar"
        className={`gap-2.5 pb-2 mt-3 w-full text-5xl font-medium leading-tight text-center text-white whitespace-nowrap ${color} rounded-2xl min-h-[110px] max-md:text-4xl`}
      >
        {rank}
      </div>
    </div>
  );
};

export default ProgressBar;
