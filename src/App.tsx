import TodoList from './Components/TodoList/TodoList';
import TodoTask from './Components/TodoTask/TodoTask';
import { TasksProvider } from './TodoContext';

const App = () => {
  return (
    <TasksProvider>
      <main>
        <h1>TODO LIST:</h1>
        <TodoTask />
        <TodoList />
      </main>
    </TasksProvider>
  );
};

export default App;
