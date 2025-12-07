import React, { useState } from "react";

// Input box to add todo

// Show list of todos

// Delete a todo item

// Mark a todo as completed

//Edit the todo item

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const todo = {
        id: todos.length + new Date().getTime(),
        title: input,
        completed: false,
      };
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      setInput("");
    }
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((_, i) => i !== id);
    setTodos(newTodos);
  };
  const handleMarkCompleted = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleEditTodo = (id, newTitle) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(newTodos);
  };
  return (
    <div
      style={{
        width: "450px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Todo App
      </h2>

      {/* Add Todo Input */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={handleAddTodo}
          style={{
            padding: "10px 16px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              marginBottom: "12px",
              background: "#f7f7f7",
              borderRadius: "8px",
            }}
          >
            {/* Left Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleMarkCompleted(todo.id)}
              />

              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#000",
                }}
              >
                {todo.title}
              </span>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {
                  const newTitle = prompt("Edit todo:", todo.title);
                  if (newTitle && newTitle.trim() !== "") {
                    handleEditTodo(todo.id, newTitle);
                  }
                }}
                style={{
                  padding: "6px 10px",
                  background: "#2196F3",
                  border: "none",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteTodo(index)}
                style={{
                  padding: "6px 10px",
                  background: "#f44336",
                  border: "none",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
