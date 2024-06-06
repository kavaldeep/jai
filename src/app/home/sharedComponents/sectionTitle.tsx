import { delay } from "framer-motion";
import React from "react";
interface SectionTitleProps {
  title: string;
  description: string;
  animation?: ( ref : HTMLDivElement) => void;
  subAnimation? : (ref : HTMLDivElement) => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  animation  , 
  subAnimation 
}: SectionTitleProps) => {
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);
  React.useEffect(() => {
    if (ref.current &&  animation)
     animation(ref.current);
    if (ref2.current && subAnimation)
      {
        subAnimation(ref2.current );
      }
      }, []);
  return (
    <div className="flex flex-col items-center py-[90px]">
      <p
        className="text-5xl text-bold  text-white py-[20px] grow-scale"
        ref={ref}
      >
        {" "}
        {title}{" "}
      </p>
      <p className="text-white py-[5px] opacity-60 "  ref = {ref2}> {description} </p>
    </div>
  );
};

export default SectionTitle;
