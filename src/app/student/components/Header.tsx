interface HeaderProps {
  date: string;
}

export const Header = ({ date }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold">{date}</h1>
    </div>
  );
}; 