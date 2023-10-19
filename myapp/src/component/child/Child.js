import React from 'react'
import { useState } from 'react';

const Child = ({datafun}) => {
  // let datafun=props.datafun;
  // let {datafun} =props;
  // let str="hello";
  // datafun(str)
  let [search,setSearch]=useState("");
  function inputChnageHandler(ev){
      // console.log(ev.target.value);
      setSearch(ev.target.value)
  }
  function btnClickHandler(ev){
    datafun(search);
  }
  
  return (
    <div>
      <h1>Inside Child</h1>
      <input type="txt" value={search} onChange={inputChnageHandler}></input>
      <button onClick={btnClickHandler}>Send Data</button>
    </div>
  )
}

export default Child
