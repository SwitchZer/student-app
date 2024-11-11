import React from "react";

const AppreciationCorner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center p-6 mt-4 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-start w-full max-md:max-w-full">
        <div
          data-layername="challengeProgress"
          className="flex flex-col flex-1 shrink justify-center px-6 pt-6 pb-5 w-full bg-orange-50 rounded-3xl border border-orange-300 border-solid shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full"
        >
          <div
            data-layername="descriptions"
            className="flex flex-col justify-center w-full text-center"
          >
            <h3
              data-layername="title"
              className="w-full text-2xl font-medium leading-none text-neutral-800"
            >
              Send your appreciation now
            </h3>
            <p
              data-layername="details"
              className="mt-2 w-full text-sm leading-6 text-neutral-500"
            >
              Celebrate and recognize outstanding contributions from your peers
              and teachers
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-4 w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0be2b8304ff95317defe9ee277dbd11d8103c3fedaa64d8e4f3e6c692f784a80?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 1"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2cd93629fae5aae4e75b9762ba74d2968ba218e97cece98b0ba42b84e170a3?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 2"
              className="object-contain shrink-0 self-stretch my-auto w-8 rounded-full aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcdbdd6d30224309eeb8ee1c085290b5d8c59f3c2d9316bfff061e2fc82afa1?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 3"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.02] w-[55px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6515da2c29ed0d8500dd595dfe47ef744f5e4c7755893ff882da758939bd14ce?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 4"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d491933c878ccd37e0b002ccec58cc52cc1ccf5ec4bb081f4771377cb2e6fba?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 5"
              className="object-contain shrink-0 self-stretch my-auto aspect-square min-h-[34px] w-[34px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d1fb9b76e202599013982f2210c79a57d2de034d34a0282b12aa5b401b8f1a?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
              alt="Appreciation icon 6"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[54px]"
            />
          </div>
          <button
            data-layername="buttons"
            className="flex gap-2.5 justify-center items-center self-center px-6 py-4 mt-4 w-32 max-w-full text-sm font-medium leading-loose text-center text-white bg-stone-950 rounded-[100px] max-md:px-5"
          >
            <span
              data-layername="btnContent"
              className="gap-1.5 self-stretch my-auto"
            >
              Send Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppreciationCorner;
