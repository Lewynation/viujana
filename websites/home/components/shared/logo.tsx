import React from 'react';
import Image from 'next/image';
import viujana from '@/images/viujana.png';

const Logo = () => {
  return (
    <Image
      src={viujana}
      alt="viujana"
      className="w-44 hidden"
      id="viujanaImage"
    />
  );
};

export default Logo;
