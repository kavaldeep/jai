'use client';
import {  use, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Button1 }  from './buttons';
import { Counter } from './counter';
import { GsapMagnetic } from '../animations/magnetics';

export function Hero() {

  const text = "text-5xl font-bold text-white grow-scale";
  const refs = [ useRef(null) , useRef(null) , useRef(null) ];
  useEffect(() => {
    
    if(refs[0].current == null || refs[0].current == null || refs[1].current == null) return;
    refs.forEach( (ref) => {
    //@ts-ignore
    new SplitType ( ref.current , {types: 'lines' , lineClass: 'line'} );
    gsap.fromTo(".line" , {
      yPercent: 100,
      opacity: 0
    } , {
      opacity: 1,
      yPercent: 0,
      duration: 0.5,
      delay: 0.5,
      stagger : {
        amount: 0.5,
        ease: 'power1.Out'
      }
    })
  })
  }, []);


  return (
      <div className="container max-w-[1110px]  h-[90vh] 
           flex-col items-center justify-center flex
           bg-hero  bg-center bg-no-repeat bg-no-cover"
       >
        <div className=" text-center space-y-3">
            <p className= {text} ref={refs[0]}>
              Welcome to Jai , 
            </p>
            <p className={text } ref={refs[1]}>
              The Ultimate way to trade stocks ,
            </p>
            <p className={text} ref={refs[2]}>
              With cryptocurrency
            </p>
        </div>

        <div className="text-center py-10">
          <p className="text-white text-lg">
            over a bilion in stock traded
          </p>
        </div>
        <Counter />
        <div className='flex justify-center space-x-9 py-10'>
        <Button1 label='Download App' color='web-red' />
        <Button1 label='Learn More' color='transparent'  outlineColor='web-red'/>
        </div>
        
        <div className='flex flex-col items-center  py-10'>
          <p className='text-white text-lg py-2'>
              WE ACCEPT 
          </p> 
          {/** 
           * The coin line
           * 
           */}
          <div className='flex space-x-5 py-5'>
            <div className='flex items-center space-x-2'>
              <GsapMagnetic>
            <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/btc.png" alt="Bitcoin" />
            </GsapMagnetic>
             <p className='text-white text-lg'> BitCoins</p>
            </div>

            <div className='flex items-center space-x-2'>
            <GsapMagnetic>
            <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png" alt="Ethereum" />
            </GsapMagnetic>

            <p className='text-white text-lg'> Ethereum</p>
             </div>

              <div className='flex items-center space-x-2'>
              <GsapMagnetic>
              <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/usdt.png" alt="Tether" />
              </GsapMagnetic>
              <p className='text-white text-lg'> Tether</p>
              </div>
  
          </div>
        </div>
      </div>
  );
}
