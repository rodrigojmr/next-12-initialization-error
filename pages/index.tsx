import { sectionHeading, hoverScale } from '@styles/theme';
import config from '@styles/twindConfig';
import React, { Props } from 'react';
import { tw } from 'twind';

const Home = () => {
  return (
    <>
      <section className={tw`text-gray-800`} id="mais">
        <div className={tw`container px-5 py-8 lg:py-20 mx-auto`}>
          <div
            className={tw`flex flex-wrap w-full mb-8 flex-col items-center text-center`}
          >
            <h2 className={tw`${sectionHeading}`}>Mais do que uma Box</h2>
            <p
              className={tw`lg:w-1/2 w-full leading-relaxed text-gray-500 lg:text-lg text-gray-700 text-center`}
            >
              {config.mode}
              Test
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
