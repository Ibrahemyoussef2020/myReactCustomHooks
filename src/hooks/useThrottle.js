import React, { useEffect, useRef, useState } from 'react'

const useThrottle = (value,delay) => {
  const [thorttledValue , setThorttledValue] = useState(value);
  const prevRequstTime = useRef(0);

  useEffect(()=>{
    const timer = setTimeout(()=>{

      const deltaTime = Date.now() - prevRequstTime.current;

      if (deltaTime >= delay) {
        setThorttledValue(value);
        prevRequstTime.current = Date.now();
      }
    } , delay - (Date.now() - prevRequstTime.current))

    return ()=> clearTimeout(timer);

  },[delay , value]);

  return thorttledValue;

}
  
export default useThrottle





