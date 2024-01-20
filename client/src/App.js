
import './App.css';

// components
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import Todos from './components/Todos.js';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;