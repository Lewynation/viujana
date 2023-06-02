import TwoSectionedGridImageText from '@/components/shared/two_sectioned_grid_img_txt';
import React from 'react';
import HomeFeature from '@/assets/svgs/home-feature-1.svg';
import { Icons } from 'ui';

const SellAnythingSection = () => {
  const sellAnythingList = [
    'Sell your Top 10 lists',
    'Sell your crypto tips',
    'Sell your fractal pack',
    'Sell your keto cookbook',
    'Sell your C4D scenes',
    'Sell your new emojis',
    'Seriously, sell anything!',
  ];
  return (
    <div>
      <TwoSectionedGridImageText
        bgColor="bg-darkGreen"
        content={
          <>
            <p className="text-2xl font-arimo">
              Video lessons. Monthly subscriptions. Physical products. Whatever!
              Gumroad was created to help you experiment with all kinds of ideas
              and formats.
            </p>
            <ul>
              {sellAnythingList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-4 my-3 text-xl font-hankenGrotesk"
                  >
                    <Icons.ArrowRight />
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </>
        }
        image={HomeFeature}
        title="Sell Anything"
      />
    </div>
  );
};

export default SellAnythingSection;
