import React from 'react'
import Todoitem from './Todoitem'
let task=[
    {id:1,name:"Study"},
    {id:2,name:"Cricket"},
    {id:3,name:"Footbal"}
]
const Todolist = () => {
  return (
    <div>
    {task.map((item)=>{return <Todoitem item={item} />})}  
    </div>
  )
}

export default Todolist
