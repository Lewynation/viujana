import { Button } from 'ui';
import React from 'react';

const MakeYourOwnRoadSection = () => {
  return (
    <section className="my-40 flex items-center flex-col">
      <h1 className="font-arimo text-6xl ">Make your own road</h1>
      <p className="font-arimo text-2xl text-center my-7">
        Whether you need more balance, flexibility, or just a different gig, we
        <br />
        make it easier to chart a new path. You dont have to be a tech <br />
        expert or even understand how to start a business. You just gotta <br />
        take what you know and sell it.
      </p>

      <Button
        textContent="Explore Features"
        isUnderlineOnHover
        className="font-bold text-2xl"
      />
    </section>
  );
};

export default MakeYourOwnRoadSection;
