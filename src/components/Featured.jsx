import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  // Create animations for each card
  const cards = [useAnimation(), useAnimation()];

  // Handle hover to start the animation
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  // Handle hover end to reset the animation
  const handleEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          {/* First card */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleEnd(0)}
            className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index} // Add a key for each span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="FYDE Project" />
            </div>
          </motion.div>

          {/* Second card */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleEnd(1)}
            className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index} // Add a key for each span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-contain' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="VISE Project" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
