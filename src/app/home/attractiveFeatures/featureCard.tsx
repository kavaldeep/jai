import React from "react";


interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {

    icon = "/icons/" + icon + ".svg";
    return (
        <div className="ml-5 max-w-[350px] article" >
            <div className="flex items-center space-x-4 ">
                <img src={icon} alt="icon" /> 
                <h3 className="text-white text-[28px] font-medium">{title}</h3>
            </div>
            <div className="py-[18px] opacity-60">
            <p className="text-white font-normal text-[20px]">
                {description}
            </p>
            </div>
        </div>
    );
};

export default FeatureCard;