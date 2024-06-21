import React, { FormEvent, useState } from 'react';
import { TodoTask } from '@global/types';
import { createTask } from '@/api';

interface TaskFormProps {
  addTask: (task: TodoTask) => void;
  setError: (error: string | null) => void;
}

const TaskForm = ({ addTask, setError }: TaskFormProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState(1);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTaskTitle || !newTaskPriority) 
      return setError("Title and priority must be set");
    
    const { data, error } = await createTask({
      title: newTaskTitle,
      description: newTaskDescription,
      state: false,
      priority: newTaskPriority,
    });

    if (error)
      return setError('Failed to add task. Please try again later:(');

    addTask(data);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskPriority(1);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newTaskDescription}
        onChange={e => setNewTaskDescription(e.target.value)}
        className="border p-2 mr-2"
      />
      <div className='flex items-center'>
        <input
          type="range"
          placeholder="Priority"
          value={newTaskPriority}
          min={1}
          max={5}
          onChange={e => setNewTaskPriority(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <label className='text-center'>Priority: {newTaskPriority}</label>
      </div>
      <button type='submit' className="bg-blue-500 text-white p-2">Add Task</button>
    </form>
  );
};

export default TaskForm;
