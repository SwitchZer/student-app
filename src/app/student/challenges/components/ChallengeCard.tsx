import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

interface ChallengeCardProps {
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
  isJoined?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  label,
  labelColor,
  progress,
  total,
  icon,
  date,
  title,
  points,
  buttonText,
  buttonAction,
  showDetails,
  isJoined,
}) => {
  return (
    <Card className="p-5 my-2 min-w-[240px] w-[260px]">
      <CardBody className="p-0">
        {/* Label */}
        <div className="flex justify-end">
          <Typography
            variant="small"
            color="indigo"
            className={`px-2 py-1 rounded-lg border border-${labelColor} border-solid bg-stone-50`}
          >
            {label}
          </Typography>
        </div>

        {/* Progress Circle */}
        <div className="mt-4 text-center">
          <div className="relative aspect-square bg-indigo-300 rounded-full p-2">
            <div className="absolute inset-0 m-2 rounded-full bg-gradient-to-b from-white/95 to-blue-50/95">
              <div className="flex flex-col items-center justify-center h-full">
                <Image
                  src={icon}
                  alt={`${label} challenge icon`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <Typography className="mt-1 text-black-102">
                  {progress}/{total}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Info */}
        <div className="mt-4">
          <div className="flex gap-2 items-center text-xs text-neutral-500">
            <Image
              src="/images/student/clock.svg"
              alt="calendar"
              width={16}
              height={16}
              className="object-contain"
            />
            <Typography variant="small">{date}</Typography>
          </div>

          <Typography variant="h5" className="mt-2">
            {title}
          </Typography>

          <div className="flex gap-2.5 items-center mt-4">
            <Image
              src="/images/student/coin.png"
              alt="points"
              width={25}
              height={23}
              className="object-contain"
            />
            <Typography variant="small">{points}</Typography>
          </div>
        </div>
      </CardBody>

      {/* Buttons */}
      {(buttonText || showDetails || isJoined) && (
        <CardFooter className="flex gap-8 justify-between p-0 mt-4">
          {buttonText && buttonAction && !isJoined && (
            <Button
              onClick={buttonAction}
              className="bg-black-103 text-neutral-200 rounded-full normal-case"
            >
              {buttonText}
            </Button>
          )}
          {isJoined && (
            <Button
              disabled
              className="border border-gray-300 text-gray-400 rounded-full normal-case bg-opacity-50"
            >
              Joined
            </Button>
          )}
          {showDetails && (
            <Button
              variant="outlined"
              className="border-black-103 text-black-103 rounded-full normal-case"
            >
              Details
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ChallengeCard;
