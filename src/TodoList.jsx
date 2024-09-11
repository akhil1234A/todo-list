import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 ? "No Todos" : 
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            completed={todo.completed} 
            title={todo.title} 
            onToggleTodo={onToggleTodo} 
            onDeleteTodo={onDeleteTodo}
          />
        ))
      }
    </ul>
  );
}
