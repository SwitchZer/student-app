import Image from "next/image";

interface WellbeingCardProps {
  date: string;
  mood: "Negative" | "Neutral" | "Positive";
  tags: string[];
}

const moodIcons = {
  Negative: "/images/student/Mood.png",
  Neutral: "/images/student/Mood1.png",
  Positive: "",
};

const WellbeingCard = ({ date, mood, tags }: WellbeingCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-lg"
      style={{ boxShadow: "0px 5px 10px 0px #0000000D" }}
    >
      <div className="flex items-center mb-2">
        <Image
          src="/images/student/calendar-03.svg"
          alt="Calendar icon"
          width={16}
          height={16}
          className="w-4 h-4 mr-2"
        />
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex items-center mb-2">
        <Image
          src={moodIcons[mood]}
          alt={`${mood} icon`}
          width={40}
          height={40}
          className="w-10 h-10 mr-2"
        />
        <span className="text-[16px] leading-[26px] text-black-103 font-medium">
          {mood}
        </span>
      </div>
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-white border border-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm flex items-center"
          >
            {/* <Image
              src="/images/student/tag-icon.svg"
              alt="Tag icon"
              width={16}
              height={16}
              className="w-4 h-4 mr-2 p-0.67 px-0.67 opacity-0"
            /> */}
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WellbeingCard;
