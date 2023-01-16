import Comp from './Component/Comp1'
import React ,{useState ,useEffect ,createContext } from 'react';

import './App.css';

const context = createContext();

function App() {
  

 const [value,setValue]= useState(0);
 const [value2,setValue2]= useState(0);

 

 useEffect(()=>{

  
   return console.log("Running");
 

 },[value])

 const addHandler =() =>{
      setValue(value+1);
     
      
    
   }
   const minusHandler =() =>{
   
    setValue2(value2+1);
 }

  return (
    <context.Provider value={value}>
<div >

<h1>React Hooks</h1>

<button onClick={addHandler}>value1</button>
<p>{value}
</p>
<p>{value2}</p>

<button onClick={minusHandler}>value2</button>

<Comp />

</div>

    </context.Provider>
  );
}

export default App;
export  {context};