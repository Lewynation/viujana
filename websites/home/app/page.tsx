import React from 'react';
import Image from 'next/image';
import viujana from '@/images/viujana.png';
import { PageWrapper } from '@/sharedConponents/index';
import {
  Hero,
  MakeYourOwnRoadSection,
  Navigation,
  SellAnythingSection,
  StartSellingSection,
  TakeRisksSection,
  MaxTestimonial,
  ViujanaWay,
  SellToAnyoneSection,
  RileyTestimonial,
  SellAnywhere,
  Discover,
  StephSmithTestimonial,
} from '@/pageComponents/home';

export default function Home() {
  return (
    <>
      <Image src={viujana} alt="viujana" className="w-full " />
      <PageWrapper>
        <Navigation />
        <Hero />
        <ViujanaWay />
        <TakeRisksSection />
        <StartSellingSection />
        <MakeYourOwnRoadSection />
        <SellAnythingSection />
        <MaxTestimonial />
        <SellToAnyoneSection />
        <RileyTestimonial />
        <SellAnywhere />
        <Discover />
        <StephSmithTestimonial />
      </PageWrapper>
    </>
  );
}
