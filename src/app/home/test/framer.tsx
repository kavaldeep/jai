'use client'; 
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles.scss";
import { init } from "next/dist/compiled/webpack/webpack";

const characters = "0123456789";

const generateString = (length: number)  => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default function Counter() {
  const [cycleSpin, setCycleSpin] = useCycle( "intiale" ,"spin");
  const [ odometerNumbers, setOdometerNumbers] = useState<string[]>([]);
  const [value , setValue] = useState<string>('1222221');
  const [ value2 , setValue2] = useState<string>('1543241');

  const variants = {
    initial: {
      y : 0
    },
    spin: {
      y : "calc(-100% +  68px)"
    },
  };

  useEffect(() => {
  setCycleSpin();
  const numberArray = value.split("");
  const odometerArray: string[] = [];

  numberArray.forEach((number, index) => {
    //const numbers = [value2[index],...Array.from({length: 9}, () => Math.floor(Math.random() * 10).toString()) ].join('') + number;
  
    const numbers =   value2[index] + generateString(index) + number;
    
    odometerArray.push(numbers);
  });

  setOdometerNumbers(odometerArray);
   
    const timeoutId = setTimeout(() => {
    setValue( (parseInt(value) + 1 ).toString());
  }, 5000);

  return () => {
    clearTimeout(timeoutId);
  };
 
}, [value]);

  const createOdometer = () => {
    return odometerNumbers.map((letter, index) => {
      return (
        <motion.div
          key={index}
          variants={variants}
          initial={"intiale"}
          animate={cycleSpin}
          className="odometerItem"
          transition={{
            duration: 2
          }}
        >
          {letter}
        </motion.div>
      );
    });
  };

  return (
    <div className="counter text-web-red flex flex-row ">
      <span className="dollar">$</span >
      <div className="odometer">{createOdometer()}</div>
    </div>
  )
}
