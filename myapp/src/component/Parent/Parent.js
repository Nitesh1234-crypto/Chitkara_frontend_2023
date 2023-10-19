import React from 'react'
import Child from '../child/Child';
let str="Inside parent";
let str2="Data passed";
const Parent = () => {
  return (
    <div>
     <Child data={str} data2={str2}/>
    </div>
  )
}

export default Parent
