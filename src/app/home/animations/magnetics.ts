import React, { ReactNode } from 'react';
import gsap from 'gsap';
export const GsapMagnetic: React.FC<{ children: ReactNode }> = ({ children }) => {

    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect( () => {
        if (ref.current == null) return;
        const xTo = gsap.quickTo(ref.current, "x" , {duration : 1 , ease : "elastic.out(1, 0.3)"} );
        const yTo = gsap.quickTo(ref.current, "y" , {duration : 1 , ease : "elastic.out(1, 0.3)"} );
        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            //@ts-ignore
            const { width , height , left , top } = ref.current.getBoundingClientRect();
            const x = clientX - ( left + width / 2);
            const y = clientY - ( top + height / 2);
            xTo(x);
            yTo(y);
        }

        const mouseLeave = (e : MouseEvent) => {
            xTo(0);
            yTo(0); 
        }

        ref.current.addEventListener('mousemove', mouseMove);
        ref.current.addEventListener('mouseleave', mouseLeave);
        return () => {
            ref.current?.removeEventListener('mousemove', mouseMove);
            ref.current?.removeEventListener('mouseleave', mouseLeave);
        }
    } , [])
    return(
        React.cloneElement(children as React.ReactElement<any>, { ref })
    );
};