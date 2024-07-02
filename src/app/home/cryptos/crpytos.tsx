import React from "react";
import Image from "next/image";
import SectionTitle from "../sharedComponents/sectionTitle";
import CryptoCard from "./components/component";
import { fadeUpAnimation, SectionTitleAnimation } from "../animations/animations";


const Cryptos: React.FC = () => {
    return (
        <div className="container max-w-[1110px] pt-[90px] pb-[150px]">
            <div className="relative">
            <SectionTitle title="Available Cryptos" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
  animation={(ref) => SectionTitleAnimation(ref)}
        subAnimation={(ref) => fadeUpAnimation(ref , 0.2)}
            />
            <Image
                className="absolute top-1/2 "
                src="/bg/monero-coin.png"
                alt="coin image"
                width={63}
                height={63}
            />           
            </div>
            <div className="flex space-x-[30px]">
            
            <CryptoCard 
                title="Bitcoin"
                description="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
                price="$40K"
                image="bg-bc"
            />

             <CryptoCard 
                title="LiteCoin"
                description="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
                price="$40K"
                image="bg-lc"
            />
             <CryptoCard 
                title="Ethereum"
                description="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
                price="$40K"
                image="bg-eth"
            />
            </div>

          
        </div>
    );
};



export default Cryptos;