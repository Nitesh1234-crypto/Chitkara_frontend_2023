import { useState } from 'react';
import './App.css';
import TaskItem from './component/TaskItem';
import Child from './component/child/Child';

function App() {

  let [todoData,setTodoData]=useState([
    {name:"Cricket", id:1},
    {name:"Cricket", id:2},
    {name:"Cricket", id:3}
  ]);
  function fun(newItem){
     console.log(newItem)
    //  todoData.push({name:newItem,id:4});
    //  setTodoData(todoData); ese nhi krna

    let newTodoData=[...todoData]; //pass by reference
    newTodoData.push({name:newItem,id:4})
    setTodoData(newTodoData);

  }
  return (
    <div className="App">
    <Child  datafun={fun}/>
    <TaskItem task={todoData} />
    </div>
  );
}

export default App;
