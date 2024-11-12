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
  { label: "Great", emoji: "😊" },
  { label: "Neutral", emoji: "😐" },
  { label: "Positive", emoji: "😁" },
  { label: "Negative", emoji: "😢" },
  { label: "I need help", emoji: "😞" },
] as const;

const FeelingDialog: React.FC<FeelingDialogProps> = ({
  open,
  onClose,
  step,
}) => {
  const [sliderValue, setSliderValue] = useState(5);

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
      question: "Would you like to set a reminder?",
      isSlider: true,
    },
    {
      title: "Final Step",
      question:
        "Do you feel that your contributions to the community are appreciated?",
      isSlider: true,
    },
  ];

  const { title, question, isSlider } = stepsContent[step];

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mb-4">{question}</p>
        {isSlider ? (
          <div className="flex flex-col items-center">
            <input
              type="range"
              min="1"
              max="10"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between w-full">
              <span>Disagree</span>
              <span>Agree</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {moodOptions.map(({ label, emoji }) => (
              <Button
                key={label}
                className="flex flex-col items-center w-[120px] h-[120px] rounded-full border bg-white border-gray-300 hover:bg-gray-100 shadow-none"
              >
                <Image
                  src="/images/student/Mood.png"
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
        <div className="m-6 flex justify-end">
          <Button onClick={onClose} className="px-6 py-[17px] rounded-[100px]">
            <span className="font-medium">Next</span>
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default FeelingDialog;
