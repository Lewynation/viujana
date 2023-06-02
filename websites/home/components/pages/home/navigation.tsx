import React from 'react';
import { Button } from 'ui';
import { navigationElements } from '@/constants';
import Logo from '@/components/shared/logo';

const Navigation = () => {
  return (
    <nav
      id="navigationEls"
      className="flex relative z-20 justify-between w-full items-center border-y-2 border-black bg-white"
    >
      <Logo />
      <div className="px-6 flex gap-8">
        {navigationElements.map(({ page, link }, i) => {
          return (
            <Button
              key={i}
              textContent={page}
              isUnderlineOnHover
              className="text-2xl"
            />
          );
        })}
      </div>
      <a
        href=""
        target="_self"
        className="px-10 h-full outline-none bg-black text-white py-4 flex items-center justify-center border-l-2 border-black cursor-pointer font-darkerGrotesque text-2xl hover:bg-[#fe91e8] hover:text-black transition-all duration-150"
      >
        Dashboard
      </a>
    </nav>
  );
};

export default Navigation;
