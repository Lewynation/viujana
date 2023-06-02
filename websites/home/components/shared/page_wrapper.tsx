'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const navLinks = document.getElementById('viujanaImage');
    console.log(navLinks);
    ScrollTrigger.create({
      trigger: '#mainPage',
      start: 'top top',
      end: 'bottom top',
      pin: '#navigationEls',
      pinSpacing: false,
      onEnter: () => {
        navLinks.style.display = 'block';
      },
      onLeaveBack: () => {
        navLinks.style.display = 'none';
      },
    });
  }, []);
  return (
    <main id="mainPage" className="">
      {children}
    </main>
  );
};

export default PageWrapper;
