import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from 'ui';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'utility-functions';

interface Props {
  image: StaticImageData | string;
  tags: string[];
  category: string;
  categoryDescription: string;
}

const DiscoverGridVariants = cva(
  'border-black border-[1px] rounded-2xl flex flex-col gap-4 p-5',
  {
    variants: {
      bgColor: {
        darkGreen: 'bg-darkGreen',
        brightRed: 'bg-brightRed',
        lightYellow: 'bg-lightYellow',
        darkYellow: 'bg-darkYellow',
        lightBlue: 'bg-lightBlue',
      },
    },
  },
);

export interface DiscoverGridProps
  extends VariantProps<typeof DiscoverGridVariants>,
    Props {}

const DiscoverGrid: React.FC<DiscoverGridProps> = ({
  bgColor,
  category,
  categoryDescription,
  image,
  tags,
}) => {
  return (
    <div className={cn(DiscoverGridVariants({ bgColor }))}>
      <Image
        src={image}
        alt="animation"
        className="max-w-[6rem] max-h-24 w-auto h-auto"
      />
      <h2 className="text-4xl font-arimo">{category}</h2>
      <p className="mb-1 text-lg font-arimo">{categoryDescription}</p>
      <h4 className="text-sm font-semibold font-arimo">Popular tags</h4>
      <div className="flex gap-2 mb-3">
        {tags.map((tag, index) => {
          return <Button key={index} textContent={tag} className="mr-2" />;
        })}
      </div>
    </div>
  );
};

export default DiscoverGrid;
