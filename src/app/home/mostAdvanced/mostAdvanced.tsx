import React from "react";



const MostAdvanced : React.FC = () => {

    return (
        <div
        className="bg-computer bg-cover h-[650px]
            flex justify-center items-center
            
        ">
            <div className="container max-w-[1110px]">
            <h2
            className="text-white text-bold text-[72px] "
            >
                Most Advanced Stock Trading Platform
                Ever Created ! 
            </h2>

             <div className="flex justify-center space-x-[30px] mt-[40px]">
                <div className="bg-playstore h-[65px] w-[190px]"></div>
                <div className="bg-appstore h-[65px] w-[190px]"></div>
            </div>          
            </div>
        </div>
    )
}

export default MostAdvanced;