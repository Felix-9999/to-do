import React, { useState } from "react";
import Addtodo from "./Addtodo";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text) return;
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const doneTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if(todo.id === id) todo.done = !todo.done;
     return todo
    });
    setTodos(newTodo);
  };

  return (
    <div>
      <Addtodo addTodo={addTodo} />
       <TodoList 
        todos={todos} 
        removeTodo={removeTodo}
        doneTodo={doneTodo}
       />
    </div>
  );
};

export default App;
