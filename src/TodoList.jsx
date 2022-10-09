import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,removeTodo,doneTodo}) => {
   return todos.map((todo,index)=><TodoItem
   key={index}
   {...todo}
   removeTodo={removeTodo}
   doneTodo={doneTodo}

   />)
}

export default TodoList


