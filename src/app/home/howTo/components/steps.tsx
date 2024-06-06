import React from "react";

// takes the props label and step 
interface StepsProps {
    label: string;
    step: number;
}
const Steps: React.FC<StepsProps> = ( { label , step} : StepsProps) => {
    return(
        <div className="flex flex-row w-[286px] space-x-4  p-3 rounded-full 
         border border-web-red my-6 
        hover:shadow-custom-light
         " >
         <div className="rounded-full bg-web-red
        w-[42px] h-[42px]
        ">
            <p className="text-gray-900 text-center pt-[10px]"> {step} </p>
        </div>       
        
        <div className="flex items-center"> 
            <p className="text-web-red text-lg">  {label} </p>
        </div>
        </div>
    )
} ;


export default Steps;