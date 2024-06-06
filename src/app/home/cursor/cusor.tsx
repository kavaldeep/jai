'use client';
import gsap from "gsap";
import { useEffect , useState} from "react";

const Cursor : React.FC = () => {

    const [position , setPosition] = useState({x : 0 , y : 0});

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.to({} , 0.016 , {
            repeat : -1,
            onRepeat : () => {
                gsap.set( ".cursor-main" , {
                    css : {
                        top : position.y,
                        left : position.x
                    }
                })
            }
        })
    } , [position]);

    return (
        <div  className="cursor-main"
         >
            <img src="/bg/check.png" className="eye" alt="cursor" />
        </div>
    )
}

export default Cursor;