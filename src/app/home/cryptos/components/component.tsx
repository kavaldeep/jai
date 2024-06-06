import React from "react";
import { Button1 } from "../../hero/buttons";
import AddActiveClassOnHover from "../../animations/cursorHover";

interface CryptoCardProps {
    title: string;
    description: string;
    price: string;
    image: string;
}
const CryptoCard : React.FC<CryptoCardProps> = ( { title , description , price , image}) => {

    return (
     <AddActiveClassOnHover>
    <div className="w-[350px] h-[650px]  ">
         <div className="overflow-hidden">
         <img src={`bg/${image}.png`} alt="Bitcoin" className="w-full h-full 
         hover:scale-105 transition-all duration-500 
         " /> 
         </div>
         <div className="bg-white  p-6 h-[300px]  flex flex-col justify-between" >
            <div>
            <h3 className="text-[24px] font-bold  pb-3"> {title}  </h3>
            <p className="opacity-60">
                {description}
            </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-web-red font-bold text-[36px]"> {price}</h3>
            {/*  <Button1 label="Learn More"
                color="web-red"
              /> 
              */}               
            </div>
         </div>

     </div>
      </AddActiveClassOnHover>
        
    )
};

export default CryptoCard;