import { useCallback, useEffect, useState } from 'react';
import useThrottle from '../hooks/useThrottle';
import useDebounce from '../hooks/useDebounce';

function Throttle() {
  const [count , setCount] = useState(0);

  const updatedThrottle =  useCallback(useThrottle(
    count,
    500,
  ) , [count])

  const updatedDebounce =  useCallback(useDebounce(
    count,
    500,
  ) , [count])


 const increment = ()=> {setCount(count => count + 1)}
  
  useEffect(()=>{} ,[updatedThrottle ,  count])

  return (
    <div className="throttle" onClick={increment} style={{
        backgroundColor:'yellow',
        padding:'1rem'
    }}>
      <h2>Throttle</h2>
      <p>Normal   : {count}</p>
      <p>Throttle : {updatedThrottle}</p>
      <p>Debounce : {updatedDebounce}</p>
    </div>
  );
}

export default Throttle;
