import { useCallback, useEffect, useState } from 'react';
import useThrottle from '../hooks/useThrottle';
import useDebounce from '../hooks/useDebounce';

function Debounce() {
  const [value , setValue] = useState('');

  const updatedThrottle =  useCallback(useThrottle(
    value,
    1000,
  ) , [value])

  const updatedDebounce =  useCallback(useDebounce(
    value,
    1000,
  ) , [value])


 const handleChange = (e)=> {setValue(e.target.value)}
  
  useEffect(()=>{} ,[value])

  return (
    <div className="throttle" style={{
        backgroundColor:'cyan',
        padding:'1rem'
    }}>
      <h2>Debounce</h2>
      <input 
        className='debounce-input' 
        type='text' placeholder='type......'
        onChange={(e)=> handleChange(e)}
      />
      <p>Normal   : {value}</p>
      <p>Throttle : {updatedThrottle}</p>
      <p>Debounce : {updatedDebounce}</p>
    </div>
  );
}

export default Debounce;
