import { TodoTask } from '@global/types';
import { MyButton } from './ui';

interface TaskProps {
  task: TodoTask;
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, newState: Partial<TodoTask>) => void,
}

const TaskItem = ({ task, handleDelete, handleUpdate }: TaskProps) => {
  const onClickDelete = () => handleDelete(task.id);
  const onClickChangeState = () => handleUpdate(task.id, {state: !task.state});

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.state ? 'Done' : 'In Progress'}</p>
      <p>Created At: {new Date(task.createdAt).toLocaleDateString()}</p>
      <button 
        onClick={onClickChangeState} 
        className={'bg-green-500 text-white p-2 mr-2 min-w-28'}
      >
        {task.state ? 'In Progress' : 'Done'}
      </button>
      <MyButton handle={onClickDelete}>Delete</MyButton>
    </div>
  );
};

export default TaskItem;
