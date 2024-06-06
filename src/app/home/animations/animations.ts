import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
export const SectionTitleAnimation =( ref  : HTMLDivElement) => {
    const charSplit = new SplitType(ref, { types: 'chars' , wordClass : 'wordSplit' });
    gsap.fromTo(charSplit.chars,{
      opacity : 0,
      y:50
    }, {
      opacity: 1,
      duration: 0.5,
      y: 0,
      ease: "power4.easeOut",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        toggleActions: "play none none none", 
      }
    });

}

export const fadeUpAnimation = (ref : HTMLDivElement , delay = 0) => {
  gsap.fromTo(ref, {
    opacity: 0,
    y: 30
  } , {
    delay,
    opacity: 1,
    y: 0,
    ease: "power1.ease",
    scrollTrigger: {
      trigger: ref,
      start: "top 80%",
      toggleActions: "play none none none", 
    }
  });
}