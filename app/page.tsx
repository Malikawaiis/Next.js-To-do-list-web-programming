'use client';

import { useState, useEffect } from 'react';
import './globals.css'; // Optional if imported already in layout.tsx

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h1>📝 To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((t, i) => (
          <li key={i} className="todo-item">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(i)}
            />
            <span className={`todo-text ${t.completed ? 'completed' : ''}`}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(i)} className="todo-delete">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
