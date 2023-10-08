import React from 'react'

const Todoitem = (props) => {
  return (
    <div>
        <p>taskitem</p>
      <h1>{props.item.name}</h1>
    </div>
  )
}

export default Todoitem
