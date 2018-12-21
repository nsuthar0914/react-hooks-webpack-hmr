import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>Remove</button>
          <button className="EditTodo" onClick={() => setMode("edit")}>Edit</button>
        </>
        : <>
          <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
          <button className="EditTodoSave" onClick={() => {edit(text); setMode("list");}}>Save</button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>Cancel</button>
        </>}
    </div>
  );
}

export default Todo;