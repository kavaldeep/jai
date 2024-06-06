import React from 'react';
import Steps from './steps';


const Component2: React.FC = () => {
  return (
    <div className='flex justify-center  items-center mx-auto space-x-6 '>
      <div className='mobile-chart w-[540px] h-[673px] overflow-hidden 
      rounded-xl
      '>
        <img src="bg/bg-chart.png" alt="placeholder" className=' hover:scale-105 transition-all duration-500 '/>
      </div>
      <div className='flex flex-col '>
        <h2 className='text-web-red text-3xl text-bold '>Steps to Trade </h2>
        <div >
            <Steps 
                label="Create an Account"
                step={1}
            />
            <Steps
                label="Deposit Funds"
                step={2}
            />
            <Steps 
                label="Trade"
                step={3}
            />
            <Steps 
                label="Withdraw Funds"
                step={4}
            />
        </div>
      </div>
      
    </div>
  );
}

export default Component2;