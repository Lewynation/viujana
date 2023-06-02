import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from 'ui';

interface Props {
  testimonialText: React.ReactNode;
  testimonialAuthor: string;
  testimonialAuthorImage: StaticImageData | string;
  itemSold: string;
  topRightImage?: StaticImageData | string;
  bottomLeftImage?: StaticImageData | string;
  bgColor: string;
}

const Testimonial: React.FC<Props> = ({
  itemSold,
  testimonialAuthor,
  testimonialAuthorImage,
  testimonialText,
  bottomLeftImage,
  topRightImage,
  bgColor,
}) => {
  return (
    <div className={`grid grid-cols-2 ${bgColor}`}>
      <div className="flex flex-col items-center justify-center px-16 ">
        {testimonialText}
        <p className="self-start mt-10 text-xl font-bold font-barlow">
          {itemSold}
        </p>
      </div>
      <div>
        <div className="relative m-20">
          <Image
            src={testimonialAuthorImage}
            alt="authorImage"
            className="w-full"
          />
          {bottomLeftImage && (
            <Image
              src={bottomLeftImage}
              alt="BottomLeftImage"
              className="absolute left-0 bottom-6"
            />
          )}
          {topRightImage && (
            <Image
              src={topRightImage}
              alt="TopRightImage"
              className="absolute top-0 -right-4"
            />
          )}
          <Button textContent="Vegalia" className="absolute bottom-0 right-2" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
