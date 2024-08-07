import React from "react";
import SectionTitle from "../sharedComponents/sectionTitle";
import FeatureCard from "./featureCard";
import { fadeUpAnimation, SectionTitleAnimation } from "../animations/animations";
import Image from "next/image";


const AttractiveFeatures: React.FC = () => {
    return(
        <div className="container max-w-[1110px]  pb-[180px]">
            <div className="relative">
            <SectionTitle
                title="Attractive Features"
                description="Windaful makes playing the UK's best raffles easy and fun."
                  animation={(ref) => SectionTitleAnimation(ref)}
                  subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
            />
            <Image
                className="absolute bottom-10 right-[-45px]"
                src="/bg/bit-coin.png"
                alt="coin image"
                width={95}
                height={95}
            />
            </div>
            <div className="flex flex-wrap  justify-center">
            <FeatureCard
                icon="cup"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />
           
            <FeatureCard
                icon="wallet"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />
             <FeatureCard
                icon="lock"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />
             <FeatureCard
                icon="dollar"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />

            <FeatureCard
                icon="gift"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />

            <FeatureCard
                icon="support"
                title="Weekly Trading Contest"
                description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
            />
            </div>
        </div>
    );
} ;

export default AttractiveFeatures;