type LeadCardProps = {
  teamNumber: number;
  points: number;
};
export const LeadCard = ({ teamNumber, points }: LeadCardProps) => {
  return (
    <div className="grid grid-cols-2 border-2 border-[#152C69]  font-font-2 text-[#152C69] place-items-center text-[1.4rem] rounded-xl">
      <div className="">
        <h1>{teamNumber}</h1>
      </div>

      <div>
        <h1>{`${points / 1000} seconds`}</h1>
      </div>
    </div>
  );
};
