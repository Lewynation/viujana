import TwoSectionedGridImageText from '@/components/shared/two_sectioned_grid_img_txt';
import React from 'react';
import HomeFeature from '@/assets/svgs/home-feature-4.svg';

const SellAnywhere = () => {
  return (
    <div>
      <TwoSectionedGridImageText
        padded
        bgColor="bg-darkYellow"
        image={HomeFeature}
        title="Sell Anywhere"
        content={
          <p className="text-2xl font-arimo">
            Create and customize your storefront with our all-in-one platform or
            choose to use your personal site instead. With Zapier, you can
            seamlessly connect your Gumroad account to thousands of apps in your
            current stack.
          </p>
        }
      />
    </div>
  );
};

export default SellAnywhere;
