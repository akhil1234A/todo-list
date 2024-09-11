import React from 'react';

export function TodoItem({ id, completed, title, onToggleTodo, onDeleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleTodo(id)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
