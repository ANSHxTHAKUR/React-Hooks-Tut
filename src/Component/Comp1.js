import React,{useContext} from 'react'
import{context} from '../App.js'



const Comp2 = () => {
  const data = useContext(context);
  return (
    
    <div>{data*2}</div>
  )
}



const comp1 = () => {
  return (
    <div>
      <Comp2/>
      </div>
  )
}

export default comp1;