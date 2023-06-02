import React from 'react';
import vegalia from '@/images/vegalia.png';
import Paintrush from '@/assets/svgs/paint-brush.svg';
import GumCoins from '@/assets/svgs/gum-coins.svg';
import { Button } from 'ui';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 border-b-2 border-black ">
      <Hero.Right />
      <Hero.Left />
    </div>
  );
};

Hero.Right = function RightHero() {
  return (
    <div className="flex flex-col justify-center px-24 border-r-2 border-black bg-brightPink">
      <h2 className="mb-5 font-barlow text-8xl">
        Get from <br />
        zero to $1
      </h2>
      <h3 className="mb-5 text-2xl font-hankenGrotesk">
        With ViuJana, anyone can earn their first dollar online. Just start with
        what you know, see what sticks, and get paid. Its that easy.
      </h3>
      <Button textContent="Start selling" />
    </div>
  );
};

Hero.Left = function LeftHero() {
  return (
    <div className="bg-darkYellow">
      <div className="relative m-20">
        <Image src={vegalia} alt="vegalia" className="w-full" />
        <Image
          src={Paintrush}
          alt="vegalia"
          className="absolute bottom-0 left-0"
        />
        <Image
          src={GumCoins}
          alt="GumCoins"
          className="absolute top-0 -right-4"
        />
        <Button textContent="Vegalia" className="absolute bottom-0 right-2" />
      </div>
    </div>
  );
};

export default Hero;
