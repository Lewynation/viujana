import React from 'react';
import Image, { StaticImageData } from 'next/image';
import sellABook from '@/assets/svgs/sell_book.svg';
import startBlogPost from '@/assets/svgs/start_blog-post.svg';
import excitingClors from '@/assets/svgs/Exciting-Colors.svg';

const StartSellingSection = () => {
  return (
    <div className="relative grid grid-cols-2 border-b-2 border-black">
      <StartSellingSection.GridSection
        backgroundColor="bg-black"
        image={sellABook}
        text="Instead of selling a book..."
      />
      <StartSellingSection.GridSection
        backgroundColor="bg-lightYellow"
        image={startBlogPost}
        text="...start by selling a blog post!"
      />
      <div className="absolute -bottom-20 right-6">
        <Image src={excitingClors} alt="excitingClors" />
      </div>
    </div>
  );
};

type GridSectionProps = {
  backgroundColor: string;
  text: string;
  image: StaticImageData;
};

StartSellingSection.GridSection = function GridSection({
  backgroundColor,
  image,
  text,
}: GridSectionProps) {
  return (
    <div
      className={`flex items-center justify-center ${backgroundColor} py-20 relative`}
    >
      <div className="relative">
        <Image src={image} alt="sell a book" />
        <div className="absolute px-8 text-xl bg-white border-2 border-black py-7 font-arimo rounded-xl -top-10 -left-10">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StartSellingSection;
