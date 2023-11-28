import {
  Dispatch,
  FC,
  ReactElement,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { DispatchActionType, TaskType } from './global.interface';

const TasksContext = createContext<null | TaskType[]>(null);

//@ts-expect-error - cannot provide not null value
const TasksDispatchContext = createContext<Dispatch<DispatchActionType>>();

export const TasksProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [tasks, dispatch] = useReducer<Reducer<TaskType[], DispatchActionType>>(
    tasksReducer,
    []
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

function tasksReducer(tasks: TaskType[], action: DispatchActionType) {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'delete': {
      return tasks.filter((t) => t.id !== action.id);
    }
  }
}
