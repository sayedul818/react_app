import { useState } from "react"

export default function Todo({ name, id, blood, subject, isDone }) {
  const [count,setCount]=useState(0);
  const handleAdd=()=>{
    const newCount=count+1;
    setCount(newCount);
  }
  return (
    <div id="Todo" className='student-div'>
      <h4>NAME : {name}</h4>
      <h4>ID : {id}</h4>
      <h4>Blood Group : {blood}</h4>
      <h4>Subject : {subject}</h4>
      <h4>Result : {isDone ? "Pass" : "fail"}</h4> {/* conditional statement=>ternary */}
      <h4>Character:
        {isDone && "GOOD"} {/*conditional statement=> only for true */}
        {isDone || "BAD"} {/* conditional statement=> only for false*/}
      </h4>
      <h4>Counter : {count}</h4>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )

}