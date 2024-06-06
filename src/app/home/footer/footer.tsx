import React from "react";
import { GsapMagnetic } from "../animations/magnetics";

interface FooterProps {
    title: string;
    links : string[];
}

const Footer: React.FC = () => {

    return(
        <div className="container max-w-[1110px] ">
            <div className="flex space-x-[90px] justify-center">
            <Description />
            <Sections 
                title="Cryptos" 
                links={["How it works", "cryptos", "Features", "Testimony", "university"]}
            />
            <Sections 
                title="Legal"
                links={["Terms and conditions", "Privacy Policy", "Cookie Policy", "Risk Disclosure", "AML Policy"]}
            />
            <NewsLetter />
        </div>
        <hr className="my-4 text-gray-400 opacity-20" />
        <div className="flex flex-row justify-between ">
            <div className="space-x-4 " >
                <a className="text-white text-[16px]">
                    Privacy & Terms
                </a>
                <a className="text-white text-[16px]">
                    Contact Us
                </a>
            </div>

            <div>
            <p className="text-white text-[16px] text-center  ">
                © 2024 kavaldeep.Inc . All rights reserved
            </p>
            </div>
            <div className="flex flex-row space-x-2">
                <GsapMagnetic>
                <img src="/icons/facebook.svg" alt="facebook" />
                </GsapMagnetic>

                <GsapMagnetic>
                <img src="/icons/linkedIn.svg" alt="linkedIn" />
                </GsapMagnetic>

                <GsapMagnetic>
                <img src="/icons/youtube.svg" alt="youtube" />
                </GsapMagnetic>
            </div>
            
        </div>
        </div>
    )
}



const Sections : React.FC<FooterProps> = ( { title , links} : FooterProps) => {
    const linkStyle = "text-white  text-[16px]";
    return (
        <div>
            <h3 className="text-web-red font-bold text-2xl">
                {title}
            </h3>
            <div className="space-y-[10px]">
            <ul className="flex flex-col space-y-[8px] mt-9">
                {links.map((link, index) => (
                    <li key={index} className={linkStyle}>
                        <a>{link}</a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

const NewsLetter = () => {
    return(
        <div>
            <h3 className="text-web-red font-bold text-2xl">
                Newsletter
            </h3>
            <div className=" mt-9">
            <p className="text-white opacity-60 text-[16px]">
                Over 25000 people have subscribed
            </p>
        <div className="mt-5 w-[365px] h-[60px] 
        flex  justify-center items-center rounded-full
         bg-white">
          <div className="flex ">
            <input 
              type="text" 
              placeholder=" Enter your email " 
              className="border rounded-l-md outline-none border-transparent text-gray-900"
            />
            
             <button className="px-4 py-2 bg-web-red text-white rounded-full ">
              Subscribe
            </button>
           </div>
        </div>
            </div>
        </div>
    )
}

const Description = () => {
    return(
        <div>
            <h3 className="text-web-red font-bold text-2xl">
                Description
            </h3>
            <div className=" mt-9">
            <p className="text-white opacity-60 text-[16px]">
                Don't miss the opportunity to invest in the future of currency
                <br />  
                Be ahead of the game
            </p>
            </div>
        </div>
    )
}
export default Footer;