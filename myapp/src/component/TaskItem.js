import React from 'react'

const TaskItem = ({task}) => {
  return (
    <div>
      {/* {task.map((ele,idx)=> <h1>{ele.name}</h1>)} */}
      {task.map((ele,idx)=>{return <h1 key={idx}>{ele.name}</h1>})}
    </div>
  )
}

export default TaskItem
