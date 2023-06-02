import TwoSectionedGridImageText from '@/components/shared/two_sectioned_grid_img_txt';
import React from 'react';
import HomeFeature from '@/assets/svgs/home-feature-2.svg';

const SellToAnyoneSection = () => {
  return (
    <div>
      <TwoSectionedGridImageText
        padded
        bgColor="bg-black"
        image={HomeFeature}
        title="Sell to Anyone"
        content={
          <p className="text-2xl font-arimo">
            Build a loyal following with simple posts, email newsletters, and
            automated workflows. Plus let your customers pay what they want or
            choose between one-time, recurring, or fixed-length payments in your
            currency of choice. (We’ll handle the fine print, like VAT).
          </p>
        }
      />
    </div>
  );
};

export default SellToAnyoneSection;
