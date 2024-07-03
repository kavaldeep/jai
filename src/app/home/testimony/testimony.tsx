import React from "react";
import Image from "next/image";
import SectionTitle from "../sharedComponents/sectionTitle";
import { fadeUpAnimation, SectionTitleAnimation } from "../animations/animations";

const Testimony: React.FC = () => {
  return (
    <div className="container relative max-w-[1110px] ">
      <SectionTitle
        title="30 Millions User WorldWide"
        description="Join the millions of people using the future of money."
        animation={(ref) => SectionTitleAnimation(ref)}
        subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
      />
      <Image
        className="absolute top-10 lg:left-[-100px] left-0"
        src="/bg/monero-coin.png"
        alt="coin image"
        width={63}
        height={63}
      />
      <div className="flex flex-row space-x-9 justify-center  ">
        <TestimonyCard />

        <TestimonyCard />

        <TestimonyCard />
      </div>

      <Image
        className="absolute bottom-[-100px]  lg:left-[-100px] left-0"
        src="/bg/bit-coin.png"
        alt="coin image"
        width={95}
        height={95}
      />

       <Image
        className="absolute bottom-[-160px] lg:right-[-160px] right-0"
        src="/bg/eth-coin.png"
        alt="coin image"
        width={160}
        height={160}
      />
    </div>
  );
};

const TestimonyCard: React.FC = () => {
  return (
    <div
      className="
        min-h-[450px] min-w-[300px]
        border-[1px] border-web-red rounded-lg  
        hover:shadow-custom-light
        flex flex-col  items-center
        border py-[67px] space-y-[24px] px-[37px]"
    >
      <Image
      
        src="/icons/quotions.svg"
        alt="quotation"
        width={60}
        height={60}
      />
      <p className="text-white opacity-60">
        Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed
        vel.
      </p>
      <div className="flex flex-col items-center space-y-[12px]">
        <div className="bg-face w-[48px] h-[48px] rounded-full "></div>
        <div className="flex flex-col space-x-[5px] items-center">
          <p className="text-white text-[20px]"> Kavaldeep Singh </p>
          <p className="text-[16px] text-web-red"> CEO </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
