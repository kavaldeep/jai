import React from "react";
import Image from "next/image";
import { GsapIconsAppears } from "../animations/iconsAppears";
import { GsapMagnetic } from "../animations/magnetics";

const Icons = () => {
    return (
        <div>
        
        <GsapIconsAppears height={150} delay={1}>
         <Image  className="absolute top-[50vh]  right-[10vw] "
            src="/bg/lite-coin.png"
            alt=" Lite coin image"
            width={150}
            height={150}
        />        
        </GsapIconsAppears>
        <GsapIconsAppears height={95} delay={1.2}>
        <Image  className="absolute top-[40vh]  left-[20vw]"
            src="/bg/eth-coin.png"
            alt=" Lite coin image"
            width={95}
            height={95}
        />
        </GsapIconsAppears>
        <GsapIconsAppears height={63} delay={1.4}>
          <Image  className="absolute top-[90vh]  right-[10vw]"
            src="/bg/bit-coin.png"
            alt=" Lite coin image"
            width={63}
            height={63}
            />
        </GsapIconsAppears>
        <GsapIconsAppears height={160} delay={1.6}>
        <Image  className="absolute top-[95vh]  left-[10vw]"
            src="/bg/monero-coin.png"
            alt=" Lite coin image"
            width={160}
            height={160}
        />
        </GsapIconsAppears>

  
        </div>
    );
};


export default Icons;