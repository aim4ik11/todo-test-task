import { TodoTask } from '@global/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    return { data };
  } catch({ message }: any) {
    return { error: message };
  }
};

export const createTask = async (task: Omit<TodoTask, 'id' | 'createdAt'>) => {
  try {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return { data };
  } catch({ message }: any) {
    return { error: message };
  }
};

export const updateTask = async (id: string, updates: Partial<TodoTask>) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return { data };
  } catch({ message }: any) {
    return { error: message };
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return { data };
  } catch({ message }: any) {
    return { error: message };
  }
};
