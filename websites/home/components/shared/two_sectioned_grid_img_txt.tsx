import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'utility-functions';

interface Props {
  image: StaticImageData;
  title: string;
  content: React.ReactNode;
  bgColor: string;
}

const TwoSectionedGridImageParentVariants = cva('border-black border-r-2', {
  variants: {
    padded: {
      true: 'px-20 py-20 flex justify-center items-center',
    },
  },
});

interface TwoSectionedGridImageTextVariantsProps
  extends VariantProps<typeof TwoSectionedGridImageParentVariants>,
    Props {}

const TwoSectionedGridImageText: React.FC<
  TwoSectionedGridImageTextVariantsProps
> = ({ content, bgColor, image, title, padded }) => {
  return (
    <div className="grid grid-cols-2 border-black border-y-2">
      <div
        className={cn(
          `${bgColor}`,
          TwoSectionedGridImageParentVariants({ padded }),
        )}
      >
        <Image src={image} alt={title} className={cn()} />
      </div>
      <div className="flex flex-col items-start justify-center px-24 py-24 gap-14">
        <h2 className="text-5xl font-hankenGrotesk">{title}</h2>
        {content}
      </div>
    </div>
  );
};

TwoSectionedGridImageText.defaultProps = {
  padded: false,
};

export default TwoSectionedGridImageText;
