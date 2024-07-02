import React from 'react';
import Image from 'next/image';
import SectionTitle from '../sharedComponents/sectionTitle';
import Component2 from './components/component2';
import { SectionTitleAnimation , fadeUpAnimation} from '../animations/animations';

const HowTo: React.FC = () => {
  return (
    <div className='relative'>
      <SectionTitle 
        title='How To Trade with Jai'
        description='Trade with crypto easily! No prior knowledge required. '
        animation={(ref) => SectionTitleAnimation(ref)}
        subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
      />
      <Component2 />
      <Image 
        className='absolute top-[80vh]  right-[10vw]'
        src='/bg/bit-coin.png'
        alt='coin image'
        width={150}
        height={150}
      />      
    </div>
  );
}

export default HowTo;