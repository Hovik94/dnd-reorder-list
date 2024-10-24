import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Create a cookbook with favorite recipes" },
    { id: 2, todo: "Organize pantry" },
    { id: 3, todo: "Buy a new house decoration" },
    { id: 4, todo: "Text a friend I haven't talked to in a long time" },
    { id: 5, todo: "Bake a pie with some friends" },
    { id: 6, todo: "Plan a vacation you've always wanted to take" },
  ]);

  const dragTodo = useRef(0);
  const draggedOverTodo = useRef(0);
  const handleDragStart = ( index) => {
    dragTodo.current = index;
  };

  const handleDragEnter = ( index) => {
    draggedOverTodo.current = index;
  };

  const handleSort = () => {
    const newTodos = [...todos];
    const temp = newTodos[dragTodo.current];
    newTodos[dragTodo.current] = newTodos[draggedOverTodo.current];
    newTodos[draggedOverTodo.current] = temp;
    setTodos(newTodos);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h3>Todo List</h3>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart( index)}
            onDragEnter={() => handleDragEnter( index)}
            onDragEnd={handleSort}
            onDragOver={handleDragOver}
          >
            {todo.todo}
            <img
              src="https://cdn2.iconfinder.com/data/icons/general-ui-outlined/16/drag-256.png"
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
