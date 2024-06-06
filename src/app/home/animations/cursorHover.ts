import React from 'react';

const AddActiveClassOnHover : React.FC<{ children : React.ReactNode}> = ({children}) => { 
    
  
 const ref = React.useRef<HTMLDivElement>(null);
 // find the ref of the element .img eye 
    // find the ref of the element .img eye
 
 React.useEffect( () => { 
    const imgElement = document.querySelector('.eye') ;
    if (ref.current == null) return;
    const mouseEnter = () => {
        imgElement?.classList.add('active');
        imgElement?.parentElement?.classList.add('active');
        console.log(imgElement);
        console.log('mouse enter');
    }
    const mouseLeave = () => {
        imgElement?.classList.remove('active');
        imgElement?.parentElement?.classList.remove('active');
        console.log('mouse leave');
    }
    ref.current.addEventListener('mouseenter', mouseEnter);
    ref.current.addEventListener('mouseleave', mouseLeave);
    return () => {
        ref.current?.removeEventListener('mouseenter', mouseEnter);
        ref.current?.removeEventListener('mouseleave', mouseLeave);
    }
 }, [])
 return(
    React.cloneElement(children as React.ReactElement<any>, { ref })
);

 }


 export default AddActiveClassOnHover;