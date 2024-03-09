type playerIcon = {
  teamNumber: string;
};

export const PlayerIcon = ({ teamNumber }: playerIcon) => {
  return (
    <div className="w-[7rem] h-[7rem] bg-white rounded-full flex justify-center items-center border-4 border-[#002B5B]">
      <div className="w-[6rem] h-[6rem] bg-[#FAD74E] rounded-full flex justify-center items-center border-4 border-[#002B5B]">
        <h1 className="text-[3rem]">{teamNumber}</h1>
      </div>
    </div>
  );
};
