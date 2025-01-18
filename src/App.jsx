import React, { useEffect, useState } from 'react';
import "./index.css";
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList'; 

export default function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEM')
    if(localValue==null) return []
    return JSON.parse(localValue);
  });

   useEffect(()=>{
    localStorage.setItem('ITEM',JSON.stringify(todos))
   },[todos])


  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false }
    ]);
  }

  function toggleTodo(id) {
    setTodos(currentTodos => 
      currentTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos => 
      currentTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Test List</h1>
      <TodoList 
        todos={todos} 
        onToggleTodo={toggleTodo} 
        onDeleteTodo={deleteTodo}
      />
    </>
  );
}
