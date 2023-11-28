import { useState } from 'react';
import style from './TodoTask.module.scss';
import { useTasksDispatch } from '../../TodoContext';

const TodoTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  return (
    <section className={style.todoContainer}>
      <input
        placeholder="Add TODO"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'add',
            id: nextId++,
            text: text,
          });
          setText('');
        }}
      >
        Create
      </button>
    </section>
  );
};

export default TodoTask;

let nextId = 0;
