'use client';
import { useEffect, useState } from 'react';
import { fetchTasks, updateTask, deleteTask } from '../api';
import { TodoTask } from '@global/types';
import {FiltersBar, TaskForm, TaskList} from '@/components';

const Dashboard = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TodoTask[]>([]);
  const [filter, setFilter] = useState<number>(2);
  const [search, setSearch] = useState('');
  const [isAsc, setIsAsc] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const filterTasks = () => {
      return (
        tasks
        .filter(task => (filter === 2 || (filter === 1 && task.state) || (filter === 0 && !task.state)))
        .filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (a.priority - b.priority) * (isAsc ? 1 : -1))
      );
   }

    setFilteredTasks(filterTasks());
  }, [filter, search, tasks, isAsc]);

  const loadTasks = async () => {
    const { data, error } = await fetchTasks();
    if(error) return setError(error);
    setTasks(data);
  };

  const handleDeleteTask = async (id: string) => {
    const { error } = await deleteTask(id);
    if(error) return setError(error);

    setTasks(tasks.filter(task => task.id !== id));
    setError(null);
  };

  const handleUpdateTask = async (id: string, updates: Partial<TodoTask>) => {
    const { data, error} = await updateTask(id, updates);
    if(error) return setError(error);

    setTasks(tasks.map(task => (task.id === id ? data : task)));
    setError(null);
  };

  const addTask = (task: TodoTask) => setTasks([...tasks, task]);

  const handleSort = () => setIsAsc(!isAsc);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <FiltersBar 
        search={search} 
        setSearch={setSearch}
        setFilter={setFilter}
        handleSort={handleSort}
      />
      <TaskForm addTask={addTask} setError={setError} />
      {error && <p className='text-red-500'>An error occured</p>}

      <TaskList 
        tasks={filteredTasks} 
        handleDelete={handleDeleteTask}
        handleUpdate={handleUpdateTask}
      />
    </div>
  );
};

export default Dashboard;
