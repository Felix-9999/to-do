import React from 'react'
import './HeadTodo.css';
import './TodoText.css';
import './TodoButton.css';
const TodoItem = ({id,text,done,removeTodo,doneTodo}) => {
  const classese = ["todo"];
  if (done) classese.push("done");
  return (
    <div className={classese.join(" ")}>
    <div className="todo-text"> <p>{text}</p></div>
    <div className="todo-icons">
     <div>
      <i className="fa-solid fa-check" onClick={() => doneTodo(id)}></i>
     </div>
     <div>
      <i className="fa-solid fa-trash" onClick={() => removeTodo(id)}></i>
     </div>
    </div>
  </div>
  )
}

export default TodoItem
