export interface TodoTask {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  state: boolean;
  priority: number;
}
