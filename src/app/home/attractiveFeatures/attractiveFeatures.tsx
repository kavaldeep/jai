import React from "react";
import SectionTitle from "../sharedComponents/SectionTitle";
import FeatureCard from "./featureCard";
import { fadeUpAnimation, SectionTitleAnimation } from "../animations/animations";


const AttractiveFeatures: React.FC = () => {
    return(
        <div className="container max-w-[1110px]  pb-[180px]">
            <SectionTitle
                title="Attractive Features"
                description="Windaful makes playing the UK's best raffles easy and fun."
                  animation={(ref) => SectionTitleAnimation(ref)}
                  subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
            />
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