import { useTasks } from '../../TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

const TodoList = () => {
  const tasks = useTasks();
  return (
    <section className={style.listContainer}>
      {tasks?.map((item) => (
        <TodoItem key={item.id} task={item} />
      ))}
    </section>
  );
};

export default TodoList;
