import React , { ReactNode } from 'react';
import gsap from 'gsap';
import { GsapMagnetic } from './magnetics';

interface GsapIconsProps {
    children: ReactNode;
    height: number;
    delay: number;
}

export const GsapIconsAppears : React.FC<GsapIconsProps> = ({ children , height , delay }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect( () => {
        if (ref.current == null) return;
        console.log("the height is " , ref.current.offsetHeight);
        gsap.fromTo(ref.current , {
            opacity: 0,
            width: 0,
            height: 0,
            y: height,
            x : 0 ,
                 } , {
            duration: 2,
            opacity: 1,
            width: height,
            height: height,
            scale : 1 ,
            yoyo: true,
            y: 0,
            x : 0,
            delay: delay,
            //repeat: -1,

        } , )
    })
    return(
        React.cloneElement(children as React.ReactElement<any> , {ref})
    )
}    