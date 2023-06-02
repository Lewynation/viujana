import { Testimonial } from '@/components/shared';
import React from 'react';
import steph from '@/images/steph-smith-2.png';
import howTo from '@/assets/svgs/how-to-colors.svg';
import dollar from '@/assets/svgs/dollar.svg';

const StephSmithTestimonial = () => {
  return (
    <div>
      <Testimonial
        itemSold="Steph Smith sells contant tutorials"
        testimonialText={
          <p className="text-3xl font-arimo">
            &ldquo;For years, I had a goal to develope &lsquo;passive&rsquo;
            income streams, but struggled to make that a reality. Last year, i
            started selling informational products on Gumroad and since then
            have made $10k+ per month building products that i love.&rdquo;
          </p>
        }
        testimonialAuthor="Steph Smith"
        testimonialAuthorImage={steph}
        bottomLeftImage={howTo}
        topRightImage={dollar}
        bgColor="bg-brightPink"
      />
    </div>
  );
};

export default StephSmithTestimonial;
