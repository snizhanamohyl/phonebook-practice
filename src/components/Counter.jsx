import authContext from 'context/authContext';
import { useContext } from 'react';

export default function Counter() {
      const  {value, increment} = useContext(authContext);
    console.log("🚀 ~ file: App.jsx:12 ~ App ~ cnt:", value)
    
    return <div>
        <button onClick={increment}>INCR</button>
        <span>{value}</span>
    </div>
}