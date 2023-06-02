'use client';

import React from 'react';
import { cn } from 'utility-functions';
import { Icons } from './Icons';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

type Props = {
  isButton?: boolean;
  isExternalLink?: boolean;
  isUnderlineOnHover?: boolean;
  textContent: string;
  backgroundColor?: string;
};

const buttonVariants = cva('', {
  variants: {},
});

interface ButtonProps extends React.HTMLProps<HTMLDivElement>, Props {}

export const Button: React.FC<ButtonProps> = ({
  isButton,
  isExternalLink,
  isUnderlineOnHover,
  textContent,
  className,
  ...props
}) => {
  const TagName = isButton ? 'button' : isExternalLink ? 'a' : Link;

  return (
    <div className={className} {...props}>
      {isUnderlineOnHover ? (
        <TagName
          className="group transition-all duration-300 font-darkerGrotesque ease-in-out bg-white"
          href="#"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            {textContent}
          </span>
        </TagName>
      ) : (
        <TagName
          href={isExternalLink ? 'https://www.google.com' : '/about'}
          target={isExternalLink ? '_blank' : '_self'}
          className={cn(
            'px-2 py-1 bg-white  font-darkerGrotesque border-[1px] rounded-full border-black transition-all duration-300 hover:box-shadow hover:-translate-y-1 hover:-translate-x-1',
          )}
        >
          {textContent}
        </TagName>
      )}
    </div>
  );
};

Button.defaultProps = {
  isButton: false,
  isExternalLink: false,
  isUnderlineOnHover: false,
  backgroundColor: 'bg-white',
};
