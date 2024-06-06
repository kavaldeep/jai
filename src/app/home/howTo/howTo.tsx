import React from 'react';
//@ts-ignore
import SectionTitle from '../sharedComponents/SectionTitle';
import Component2 from './components/component2';
import { SectionTitleAnimation , fadeUpAnimation} from '../animations/animations';

const HowTo: React.FC = () => {
  return (
    <div >
      <SectionTitle 
        title='How To Trade with Jai'
        description='Trade with crypto easily! No prior knowledge required. '
        animation={(ref) => SectionTitleAnimation(ref)}
        subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
      />
      <Component2 />
    </div>
  );
}

export default HowTo;