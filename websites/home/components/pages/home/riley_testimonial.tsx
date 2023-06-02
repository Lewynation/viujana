import React from 'react';
import { Testimonial } from '@/components/shared';
import riley from '@/images/dru-riley.png';
import Education from '@/assets/svgs/education.svg';

const RileyTestimonial = () => {
  return (
    <div>
      <Testimonial
        itemSold="Dru Riley sells business insights and expertise"
        testimonialText={
          <p className="text-3xl font-arimo">
            &ldquo;Originally, I took pre-orders for my Trend Reports on
            Gumroad. But I received... exactly $0. So I changed tactics: I made
            half of my report free, and the other half paid. Today, 99% of
            Trends.VC revenue is recurring in the form of annual and quarterly
            subscriptions.&rdquo;
          </p>
        }
        testimonialAuthor="Dru Riley"
        testimonialAuthorImage={riley}
        bottomLeftImage={Education}
        bgColor="bg-darkGreen"
      />
    </div>
  );
};

export default RileyTestimonial;
