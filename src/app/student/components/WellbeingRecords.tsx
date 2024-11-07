import Button from "@/components/ui/button";
import Image from "next/image";

interface WellbeingRecord {
  date: string;
  mood: "Negative" | "Neutral" | "Positive";
  timestamp: string;
}

export const WellbeingRecords = () => {
  const records: WellbeingRecord[] = [
    {
      date: "19 Sep 2024",
      mood: "Negative",
      timestamp: "23:23",
    },
    {
      date: "17 Sep 2024",
      mood: "Neutral",
      timestamp: "23:23",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Wellbeing records</h2>
        <button className="text-blue-500">
          <span>→</span>
        </button>
      </div>

      <Button className="w-full bg-yellow-400 text-black mb-6 flex items-center justify-center gap-2 py-4">
        <Image
          src="/mood-icon.png"
          alt="Mood"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        Start your check-in
      </Button>

      <div className="space-y-4">
        {records.map((record, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Image
                  src={`/mood-${record.mood.toLowerCase()}.png`}
                  alt={record.mood}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-medium">{record.mood}</span>
              </div>
              <span className="text-sm text-gray-500">
                {record.date}, {record.timestamp}
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                variant="outlined"
                size="sm"
                className="flex items-center gap-1"
              >
                <Image
                  src="/community-icon.png"
                  alt="Community"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                My community
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="flex items-center gap-1"
              >
                <Image
                  src="/friends-icon.png"
                  alt="Friends"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                My friends
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="flex items-center gap-1"
              >
                <Image
                  src="/school-icon.png"
                  alt="School"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                My school
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
