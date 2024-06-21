import { TaskItem } from "@/components";
import { TodoTask } from "@global/types";

interface TaskListProps {
  tasks: TodoTask[];
  handleDelete: (arg: string) => void;
  handleUpdate: (arg: string, data: Partial<TodoTask>) => void;
};

const TaskList = ({tasks, handleDelete, handleUpdate}: TaskListProps) => {
  return (
    tasks.length === 0 ?
      <p>No tasks found</p> :
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-4">
            <TaskItem 
              task={task} 
              handleDelete={handleDelete} 
              handleUpdate={handleUpdate} 
            />
          </li>
        ))}
      </ul>
  );
};

export default TaskList;