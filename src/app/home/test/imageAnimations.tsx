import React , {useEffect , useRef}from "react";
import Image from "next/image";
import gsap from "gsap";

const ImageAnimations = () => {

    const coinRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(coinRef.current , {
            opacity: 0,
            width: 0,
            height: 0,
            y: 150,
            x : 0 ,
                 } , {
            duration: 2,
            opacity: 1,
            width: 150,
            height: 150,
            scale : 1 ,
            yoyo: true,
            y: 0,
            x : 0,
            //repeat: -1,
            
         });
    }, []);    
    return (
        <div className="h-[100vh] ">
        <h1>Image Animations</h1>
        <Image className="mt-[50vh]"
            ref={coinRef}
            src="/bg/lite-coin.png"
            alt=" Lite coin image"
            width={150}
            height={150}
            style={{opacity: 0}}
        />
        </div>
    );
};


export default ImageAnimations;