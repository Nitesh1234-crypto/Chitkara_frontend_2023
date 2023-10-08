import React from 'react'
import Child from './Child'

const Parent = (props) => {
    let valpar=props.val1;
    let val2par=props.val2
  return (
    <div>
      <Child data1={valpar} data2={val2par} />
    </div>
  )
}

export default Parent
