export type TaskType = {
  id: number;
  text?: string;
  done: boolean;
};

export type DispatchActionType = {
  type: 'add' | 'delete';
  id: number;
  text?: string;
};
