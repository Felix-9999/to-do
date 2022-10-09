import React, { useState, useEffect, useRef } from "react";
import './TodoButton.css';
const Addtodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    addTodo({
      id: Date.now(), 
      text: input,
      done: false,
    });
  };

  return (
    <div className="test">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <input type="submit" value="Add" className="button-65 " />
      </form>
    </div>
  );
};

export default Addtodo;
