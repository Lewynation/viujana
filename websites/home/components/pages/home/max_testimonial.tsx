import { Testimonial } from '@/components/shared';
import React from 'react';
import max from '@/images/max-ulnichey-p-800.png';
import BookWriting from '@/assets/svgs/Books&Writing.svg';
import GumCoins from '@/assets/svgs/gum-coins.svg';

const MaxTestimonial = () => {
  return (
    <div>
      <Testimonial
        itemSold="Max Ulichney Procreate Brush Packs"
        testimonialText={
          <p className="text-3xl font-arimo">
            &ldquo;I launched MaxPacks as an experimental side gig; but within 2
            years those Procreate brushes were earning more than 6-figure salary
            in CG. Leaving in favour of Gumroad enabled me to explore other
            aspects of my art, develop new hobbies, and finally prioritize my
            personal life.&rdquo;
          </p>
        }
        testimonialAuthor="Max Ulichney"
        testimonialAuthorImage={max}
        bottomLeftImage={BookWriting}
        topRightImage={GumCoins}
        bgColor="bg-brightPink"
      />
    </div>
  );
};

export default MaxTestimonial;
