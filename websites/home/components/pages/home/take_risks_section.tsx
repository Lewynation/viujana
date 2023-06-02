import React, { ReactNode } from 'react';

const TakeRisksSection = () => {
  return (
    <section className="grid grid-cols-2 border-black border-y-2">
      <TakeRisksSection.GridSection
        backgroundColor="bg-darkPink"
        text={
          <h3 className="text-center">
            Dont take risks.
            <br /> Thats scary!
          </h3>
        }
        border="border-r-2"
      />
      <TakeRisksSection.GridSection
        backgroundColor="bg-brightPink"
        text={
          <h3 className="text-center">
            Place small bets
            <br /> Thats exciting!
          </h3>
        }
      />
    </section>
  );
};

type GridSectionProps = {
  backgroundColor: string;
  text: ReactNode;
  border?: string;
};

TakeRisksSection.GridSection = function GridSection({
  backgroundColor,
  text,
  border,
}: GridSectionProps) {
  return (
    <div
      className={`${backgroundColor} font-hankenGrotesk text-5xl flex items-center justify-center py-40 ${border} border-black`}
    >
      {text}
    </div>
  );
};

export default TakeRisksSection;
