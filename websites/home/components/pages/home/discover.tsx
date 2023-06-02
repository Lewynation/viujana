import DiscoverGrid from '@/components/shared/discover_grid';
import { discoverCategories } from '@/constants';
import React from 'react';

const Discover = () => {
  return (
    <div className="px-10 py-40 mx-auto border-b-2 border-black">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-6 text-5xl text-center font-arimo">
          Looking for inspiration on what you can sell?
        </h2>
        <h3 className="text-xl text-center font-arimo">
          DIscover the best-selling products and creators on Gumroad
        </h3>
      </div>
      <div className="grid my-8 gap-7 grid-cols-auto-fit md:grid-cols-3">
        {discoverCategories.map(
          ({ bgColor, category, categoryDescription, image, tags }, index) => {
            return (
              <DiscoverGrid
                key={index}
                bgColor={bgColor}
                category={category}
                categoryDescription={categoryDescription}
                image={image}
                tags={tags}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default Discover;
