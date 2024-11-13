import { Button } from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

interface FeelingDialogProps {
  open: boolean;
  onClose: () => void;
  step: number;
}

const moodOptions = [
  { label: "Great", image: "/images/student/mood.png" },
  { label: "Neutral", image: "/images/student/mood.png" },
  { label: "Positive", image: "/images/student/mood.png" },
  { label: "Negative", image: "/images/student/mood.png" },
  { label: "I need help", image: "/images/student/mood.png" },
] as const;

const gratitudeOptions = [
  {
    label: "My community",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "My friends",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "My home",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "My family",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "My school",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "Learning",
    icon: "/images/student/smileplus.svg",
  },
  {
    label: "Good health",
    icon: "/images/student/smileplus.svg",
  },
] as const;

const FeelingDialog: React.FC<FeelingDialogProps> = ({
  open,
  onClose,
  step,
}) => {
  const [sliderValue, setSliderValue] = useState(5);

  const getSliderColor = (step: number) => {
    switch (step) {
      case 1: // Step 2
        return "#FCD34D"; // yellow
      case 2: // Step 3
      case 4: // Step 5
        return "#EF4444"; // red
      case 3: // Step 4
      case 5: // Step 6
        return "#22C55E"; // green
      default:
        return "#FCD34D";
    }
  };

  const stepsContent = [
    { title: "Dear Ahmad,", question: "How are you feeling today?" },
    {
      title: "Step 2",
      question: "What made you feel this way?",
      isSlider: true,
    },

    {
      title: "Step 3",
      question: "What can help improve your mood?",
      isSlider: true,
    },
    {
      title: "Step 4",
      question: "Do you want to talk to someone?",
      isSlider: true,
    },
    {
      title: "Step 5",
      question: "What activities do you enjoy?",
      isSlider: true,
    },
    { title: "Step 6", question: "How can we support you?", isSlider: true },
    {
      title: "Step 7",
      question: "What are you grateful for today?",
      isGratitude: true,
    },
    {
      title: "Step 8",
      question:
        "Do you feel that your contributions to the community are appreciated?",
      isSlider: true,
    },
  ];

  const { title, question, isSlider, isGratitude } = stepsContent[step];

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <button onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {step === 7 ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center py-8 border-2 border-[#7AC133] rounded-lg px-4 w-full mb-8">
              <div className="mb-4">
                <Image
                  src="/images/student/hi-five.png"
                  alt="Completion"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-lg font-medium text-center">
                Thank you for checking in!
              </p>
            </div>
            <div className="flex justify-end items-end w-full">
              <Button
                onClick={onClose}
                className="bg-black-102 text-white px-9 py-6 rounded-full hover:bg-gray-800"
              >
                Finish
              </Button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-8">{title}</h2>

            {isGratitude ? (
              <div className="flex flex-col gap-4">
                <p className="text-xl font-medium">{question}</p>
                <div className="flex flex-wrap gap-3">
                  {gratitudeOptions.map(({ label, icon }) => (
                    <button
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50"
                    >
                      <Image
                        src={icon}
                        alt={label}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : isSlider ? (
              <div className="flex flex-col">
                <div className="bg-[#FFF9E7] border border-[#FFE7AD] rounded-2xl p-4 mb-8">
                  <p className="text-base">{question}</p>
                </div>

                <div className="relative w-full">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-[23px] appearance-none bg-gray-200 rounded-[40px] cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[44px] [&::-webkit-slider-thumb]:w-[44px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-200 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-200 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                    style={{
                      background: `linear-gradient(to right, ${getSliderColor(
                        step
                      )} ${(sliderValue - 1) * 11.111}%, #E5E7EB ${
                        (sliderValue - 1) * 11.111
                      }%)`,
                    }}
                  />
                </div>

                <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
                  <div className="flex flex-col items-start">
                    <span>1</span>
                    <span>Disagree</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>5</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span>10</span>
                    <span>Agree</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {moodOptions.map(({ label, image }) => (
                  <Button
                    key={label}
                    className="flex flex-col items-center w-[120px] h-[120px] rounded-full border bg-white border-gray-300 hover:bg-gray-100 shadow-none"
                  >
                    <Image
                      src={image}
                      alt={label}
                      width={40}
                      height={40}
                      className="w-10 h-10 text-3xl m-auto"
                    />
                    <span className="mt-2 font-normal text-[14px] leading-[22px] text-gray-light-102">
                      {label}
                    </span>
                  </Button>
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <Button
                onClick={onClose}
                className="bg-black-102 text-white px-9 py-6 rounded-full hover:bg-gray-800"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
};

export default FeelingDialog;
