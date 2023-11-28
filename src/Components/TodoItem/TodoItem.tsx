import { FC } from 'react';
import { useTasksDispatch } from '../../TodoContext';
import style from './TodoItem.module.scss';
import { TaskType } from '../../global.interface';

const TodoItem: FC<{ task: TaskType }> = ({ task }) => {
  const dispatch = useTasksDispatch();

  return (
    <section className={style.itemContainer}>
      <p>{task.text}</p>
      <button
        onClick={() => {
          dispatch({
            type: 'delete',
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default TodoItem;
