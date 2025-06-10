import { useState } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Task List</h2>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    </div>
  );
}
